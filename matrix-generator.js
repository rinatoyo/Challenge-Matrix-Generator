function matrixGenerator(rows, columns) {
  // do work here
  let arr = [];

  for (let i = 0; i < rows; i++) {
    let insideArr = [];
    arr.push(insideArr);
    for (let j = 0; j < columns; j++) {
      let num = Math.floor(Math.random() * 100) + 1;
      arr[i].push(num);
    }
  }

  arr.forEach(e => {
    e.sort(function(a, b) {
      return a - b;
    });
  });

  arr.sort(function(a, b) {
    return a[0] - b[0];
  });

  return arr;
}

module.exports = matrixGenerator;
