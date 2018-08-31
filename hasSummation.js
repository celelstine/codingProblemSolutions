
function hasSummation(list, hasSummation) {
  const problemDescription = 
  `
  This problem was recently asked by Google.
  
  Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
  
  For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
  
  Bonus: Can you do this in one pass?
  `;

  console.log(`Problem Description \n${problemDescription}`);

  let distancesFromSum = {};
  let currentDifference = 0;
  let currentNumber ;
  for (var i=0; i < list.length; i++) {
    currentNumber = list[i];
    if (distancesFromSum[currentNumber]) {
      console.log(currentNumber, '-', distancesFromSum[currentNumber])
      return true;
    }
    currentDifference = hasSummation - currentNumber;
    distancesFromSum[currentDifference] = currentNumber;
  }
  console.log('no match')
  return false;
}
hasSummation([1,2,5,7,34,6,7,3,90], 15);

