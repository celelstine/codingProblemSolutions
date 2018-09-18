function reduce_to_product_array(list) {
  const problemDescription = 
  `
  This problem was asked by Uber.
  
  Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
  
  For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
  
  Follow-up: what if you can't use division?
  `;

  console.log(`Problem Description \n${problemDescription}`);
  let  currentResult = [];
  let firstNum;
  let curNumMultiple;
  list.forEach((num, index) => {
    if (index === 0) {
      firstNum = num;
      currentResult = [1];
    } else if ( index === 1) {
      currentResult = [num, firstNum];
    } else {
      curNumMultiple = currentResult[index-2]*list[index-2];
      currentResult = array_scala_multiplication(currentResult, num);
      currentResult.push(curNumMultiple);
    }
  });
  return currentResult
}

function array_scala_multiplication(list, scale) {
  const result = list.map(num => num*scale);
  return result;
}

let test = [1,2,3,4,5];

reduce_to_product_array(test);
