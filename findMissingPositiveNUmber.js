findMissingPositiveNUmber = (list) => {

  const problemDescription = 
  `
  This problem was asked by Stripe.
  
  Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
  
  For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
  
  You can modify the input array in-place.
  `;

  console.log(`Problem Description \n${problemDescription}`);
  
  var missingNumbers  = {};
  var positiveNumbers = {};
  var nextNumber = 0;
  var prevNumber = 0;

  list.forEach(num => {
    if (num > 0 ) {
      positiveNumbers[num] = num;
      nextNumber = num + 1;
      prevNumber = num - 1;

      // delete current number from missingNumbers if it's a missing nextNumber
      if (missingNumbers[num]) {
        delete missingNumbers[num];
      }

      // validate the nextNumber
      if (!positiveNumbers[nextNumber]) {
        missingNumbers[nextNumber] = nextNumber;
      } else if (positiveNumbers[nextNumber]) {
        delete missingNumbers[nextNumber];
      }
      
      // validate the prevNumber
      if (prevNumber > 0) {
        if (!positiveNumbers[prevNumber]) {
          missingNumbers[prevNumber] = prevNumber;
        } else if (positiveNumbers[prevNumber]) {
          delete missingNumbers[prevNumber];
        }
      }
    }
  });

  return missingNumbers[Object.keys(missingNumbers)[0]];
}

findMissingPositiveNUmber([3, 4, -1, 1]);

findMissingPositiveNUmber([1, 2, 0])

