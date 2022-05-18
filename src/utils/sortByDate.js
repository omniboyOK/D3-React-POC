const sortByDate = (dataset) => {
  return dataset.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
};

export default sortByDate;
