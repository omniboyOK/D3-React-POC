export const linearDataParse = (data = [], xValue, yValue) => {
  return data.map((item) => {
    return {
      date: new Date(item[xValue]),
      value: item[yValue],
    };
  });
};

export const datasetGenerator = (name, color, items = []) => {
  return {
    name: name,
    color: color,
    items: items,
  };
};
