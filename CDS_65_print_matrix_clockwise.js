function popRow(matrix, rowIndex, start_column, end_column, direction = 1) {
  if (direction === 1) {
    for (var i = start_column; i <= end_column; i++) {
      console.log(matrix[rowIndex][i]);
    }
  } else {
    for (var i = start_column; i >= end_column; i--) {
      console.log(matrix[rowIndex][i]);
    }
  }

  matrix.splice(rowIndex, 1);
  return matrix;

}

function popColumn(matrix, columnIndex, startRow, endRow, direction = 1) {
  if (direction === 1) {
    for (var i = startRow; i <= endRow; i++) {
      console.log(matrix[i][columnIndex]);
      matrix[i].splice(columnIndex, 1);
    }
  } else {
    for (var i = startRow; i >= endRow; i--) {
      console.log(matrix[i][columnIndex]);
      matrix[i].splice(columnIndex, 1);
    }
  }

  return matrix;
}

function printMatrix_clockWise(matrix) {

  let problemDescription = `
    This problem was asked by Amazon.
    
    Given a N by M matrix of numbers, print out the matrix in a clockwise spiral.
    
    For example, given the following matrix:
    
    [[1,  2,  3,  4,  5],
    [6,  7,  8,  9,  10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]]
    You should print out the following:
    
    1
    2
    3
    4
    5
    10
    15
    20
    19
    18
    17
    16
    11
    6
    7
    8
    9
    14
    13
    12
  `;

  console.log(`Problem Description \n${problemDescription}`);
  let matrix_copy = matrix;

  try {
    matrix_copy = popRow(matrix_copy, 0, 0, matrix_copy[0].length - 1);
    matrix_copy = popColumn(matrix_copy, matrix_copy[0].length - 1, 0, matrix_copy.length - 1)
    matrix_copy = popRow(matrix_copy,  matrix_copy.length - 1,matrix_copy[matrix_copy.length - 1].length - 1, 0,  -1);
    matrix_copy = popColumn(matrix_copy, 0, matrix_copy.length - 1, 0, -1)
  } catch (ex) {
    return;
  }
}


let test = [
  [1, 2, 4 ,5 ,6, 'a'],
  [7, 8, 9 ,10, 11, 'b'],
  [12, 13, 14, 15, 16, 'c'],
  [17, 18, 19, 20, 21, 'd'],
];

printMatrix_clockWise(test);


// test.splice(0,1)
// console.log(test);

