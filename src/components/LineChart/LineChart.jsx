import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { createLinearChartDOM } from "../../helper/linearChartHelper";

const LineChart = ({ data, dimensions, margins }) => {
  const svgRef = useRef(null);
  const { width, height } = dimensions;
  const { left, top, right, bottom } = margins;
  const svgWidth = width + left + right;
  const svgHeight = height + top + bottom;

  useEffect(() => {
    const { xScale, yScale, svg } = createLinearChartDOM(
      svgRef,
      data[0],
      1,
      5,
      dimensions,
      margins,
      "u"
    );

    // Draw the lines
    const line = d3
      .line()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.value));

    svg
      .selectAll(".line")
      .data(data)
      .enter()
      .append("path")
      .attr("fill", "none")
      .attr("stroke", (d) => d.color)
      .attr("stroke-width", (d) => data.indexOf(d) + 1 * 2)
      .attr("d", (d) => line(d.items));
  }, [data, dimensions, margins]); // Redraw chart if data changes

  return <svg ref={svgRef} width={svgWidth} height={svgHeight} />;
};

export default LineChart;
