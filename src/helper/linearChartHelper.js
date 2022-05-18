import * as d3 from "d3";

/**
 *
 * @param {Object} dataset an array with the items to iterate
 * @param {Number} minY the min value where the y axis will start
 * @param {Number} maxY the max value where the y axis will end from the max value inserted
 * @param {Object} dimensions an object with width and heigth for the svg component
 * @param {Object} margins add a margin outside the svg component
 * @param {String} unit add a unit to the y axis labels (ex: 10 $ where $ is the unit)
 * @returns
 */
export const createLinearChartDOM = (
  ref,
  dataset = {},
  minY = -1,
  maxY = 1,
  dimensions,
  margins,
  unit = ""
) => {
  const { width, height } = dimensions;
  // Create root container where we will append all other chart elements
  const svgEl = d3.select(ref.current);
  svgEl.selectAll("*").remove(); // Clear svg content before adding new elements
  const svg = svgEl
    .append("g")
    .attr("transform", `translate(${margins.left},${margins.top})`);

  const xScale = d3
    .scaleTime()
    .domain(d3.extent(dataset.items, (item) => item.date))
    .range([0, width]);
  const yScale = d3
    .scaleLinear()
    .domain([
      d3.min(dataset.items, (item) => item.value) - minY,
      d3.max(dataset.items, (item) => item.value) + maxY,
    ])
    .range([height - 50, 0]);
  // Add X grid lines with labels
  const xAxis = d3
    .axisBottom(xScale)
    .ticks(5)
    .tickSize(-height + margins.bottom);
  const xAxisGroup = svg
    .append("g")
    .attr("transform", `translate(0, ${height - margins.bottom})`)
    .call(xAxis);

  // Add Y grid lines with labels
  const yAxis = d3
    .axisLeft(yScale)
    .ticks(10)
    .tickSize(-width)
    .tickFormat((val) => `${val}${unit}`);
  const yAxisGroup = svg.append("g").call(yAxis);

  xAxisGroup.select(".domain").remove();
  xAxisGroup.selectAll("line").attr("stroke", "rgba(255, 255, 255, 0.2)");
  xAxisGroup
    .selectAll("text")
    .attr("opacity", 0.5)
    .attr("color", "white")
    .attr("font-size", "0.75rem");
  yAxisGroup.select(".domain").remove();
  yAxisGroup.selectAll("line").attr("stroke", "rgba(255, 255, 255, 0.2)");
  yAxisGroup
    .selectAll("text")
    .attr("opacity", 0.5)
    .attr("color", "white")
    .attr("font-size", "0.75rem");

  return { xScale, yScale, svg };
};

export const addLine = () => {};
