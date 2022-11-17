// Checks whether the given number is perfect number or not
let checkPerfectNumber = (num = 1) => {
  if(num === 1) {
      return false;
  };
  let sum = 1;
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if(num % i === 0) {
        sum = sum + i + num / i; if(sum > num) {
            return false;
        }
      };
  };
  return sum === num;
};

// Creates an array that consists of perfect numbers between 1 and any given number
function createPerfectNumberList(upperBoundNumber){
  let resultList = []
  for (let i = 1; i < upperBoundNumber; i++) 
  {
    if (checkPerfectNumber(i)) 
    {
      resultList.push(i) 
    }    
  }
  return resultList
} 

// Test
console.log(createPerfectNumberList(1000)) // Homework 1.3
