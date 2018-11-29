function solution(list){
  let problemDescription = `
  *problemDescription* \n
  This problem was asked by Google.
  
  You are given an N by M 2D matrix of lowercase letters. Determine the minimum number of columns that can be removed to ensure that each row is ordered from top to bottom lexicographically. That is, the letter at each column is lexicographically later as you go down each row. It does not matter whether each row itself is ordered lexicographically.
  
  For example, given the following table:
  
  cba
  daf
  ghi
  This is not ordered because of the a in the center. We can remove the second column to make it ordered:
  
  ca
  df
  gi
  So your function should return 1, since we only needed to remove 1 column.
  
  As another example, given the following table:
  
  abcdef
  Your function should return 0, since the rows are already ordered (there's only one row).
  
  As another example, given the following table:
  
  zyx
  wvu
  tsr
  Your function should return 3, since we would need to remove all the columns to order it.
  `
  console.log(problemDescription)

  let no_removed_columns = 0
  let order_columns = [];

  for (var i =0; i < list.length; i++) {
    order_columns.push(i);
  }

  let result = null;
  
  if (typeof list[0] != 'object') {
    return {no_removed_columns, order_columns};
  }

  for (var i =0; i < list.length-1; i++) {
    result = compare_rows(list[i], list[i+1], order_columns)
    order_columns = result.order_columns
    no_removed_columns += result.no_removed_columns
  }

  return {no_removed_columns, order_columns};
}


function compare_rows(row1, row2, columns_to_check){
  let no_removed_columns = 0;
  let = order_columns = [];
  let curColumn = -1;

  for (var i =0; i < columns_to_check.length; i++) {
    curColumn = columns_to_check[i]
    if (row1[curColumn] <= row2[curColumn]) {
      order_columns.push(curColumn)
    } else {
      no_removed_columns += 1;
    }
  }

  return {no_removed_columns, order_columns}
}


let test_list  = [
    ['c', 'b', 'a'],    
    ['d', 'a', 'f'],
    ['g', 'h', 'i']
]

let test2 = ['a', 'b', 'c', 'd', 'e', 'f']

let test3 = [
  ['z', 'y', 'x'],
  ['w', 'v', 'u'],
  ['t', 's', 'r']
]
console.log(solution(test3))
