function sudoku(matrix, word) {
  const problemDescription = 
  `
  This problem was asked by Microsoft.
  
  Given a 2D matrix of characters and a target word, 
  write a function that returns whether the word can be found in the matrix by 
  going left-to-right, or up-to-down.
  
  For example, given the following matrix:
  
  [['F', 'A', 'C', 'I'],
   ['O', 'B', 'Q', 'P'],
   ['A', 'N', 'O', 'B'],
   ['M', 'A', 'S', 'S']]
  and the target word 'FOAM', you should return true, 
  since it's the leftmost column. Similarly, given the target word 'MASS', 
  you should return true, since it's the last row.
  `;

  console.log(`Problem Description \n${problemDescription}`);

  let index_of_last_xter = word.length - 1;
  let width_matrix = matrix[0].length - 1;
  let height_matrix = matrix.length - 1;
  let found_match = false;

  // loop through the first and last row of each row  
  // and check they fit the first and last character of the word
  // if so check the entire row
  for (var i = 0; i <= width_matrix; i++) {
    if (
      matrix[0][i] === word[0]
      &&
      matrix[height_matrix][i] === word[index_of_last_xter]
    ) {
      // check if we have the word
      for (var j = 1; j < index_of_last_xter; j++) {
        if (word[j] === matrix[j][i] ) {
          found_match = true;
        } else {
          found_match = false;

          // end the loop artificailly
          j = index_of_last_xter;

        }
      }

      if (found_match) return true;
    }

    if (
      matrix[height_matrix][i] === word[0]
      &&
      matrix[0][i] === word[index_of_last_xter]
    ) {
      // check if we have the word
      for (var j = index_of_last_xter - 1; j > 0; j--) {
        if (word[j] === matrix[j][i] ) {
          found_match = true;
        } else {
          found_match = false;

          // end the loop artificially
          j = 0;
        }
      }

      if (found_match) return true;
    }
  }

  // loop through the first and last column of each row  
  // and check they fit the first and last character of the word
  // if so check the entire column
  for (var r = 0; r <= height_matrix; r++) {
    if (
      matrix[r][0] === word[0]
      &&
      matrix[r][width_matrix] === word[index_of_last_xter]
    ) {
      // check if we have the word
      for (var j = 1; j < width_matrix; j++) {
        if (word[j] === matrix[r][j] ) {
          found_match = true;
        } else {
          found_match = false;

          // end the loop artificailly
          j = index_of_last_xter;
        }
      }

      if (found_match) return true;
    }

    if (
      matrix[r][width_matrix] === word[0]
      &&
      matrix[r][0] === word[index_of_last_xter]
    ) {
      // check if we have the word
      for (var j = width_matrix - 1; j > 0; j--) {
        if (word[j] === matrix[r][j] ) {
          found_match = true;
        } else {
          found_match = false;

          // end the loop artificailly
          j = 0;
        }
      }

      if (found_match) return true;
    }
  }
}

let test_matrix = [
  ['F', 'A', 'C', 'I'],
  ['O', 'B', 'Q', 'P'],
  ['A', 'N', 'O', 'B'],
  ['M', 'A', 'S', 'S']
];

console.log(sudoku(test_matrix, 'FOAM'));

console.log(sudoku(test_matrix, 'MASS'));
