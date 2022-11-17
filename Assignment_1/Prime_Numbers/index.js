// This function checks whether the given number is prime or not
function isPrime(number){
    if (!(number > 1))
    {
        return false
    }
    else
    {
        for (let i = 2; i < number; i++)
        {
            if (number % i == 0) 
            {
                return false
                break;
            }
        }
    }
    return true
}

// This function gives console output based on the status of the given number
function findPrime(...numbers){
    numbers.map(number =>{
        if (isPrime(number)) {
            console.log(`${number} is prime.`)
        }
        else{
            console.log(`${number} is not prime.`)
        }
    })
}

// This function returns the list of prime numbers between 1 and any given number
function listPrimeNumbers(number){
    let resultList = []
    for (let index = 1; index < number; index++) {
        if (isPrime(index)) {
            resultList.push(index)
        }
    }
    return resultList
}

// Test
console.log(findPrime(2,5,6,21,13)) // Homework 1.1
//console.log(listPrimeNumbers(1000)) // Homework 1.4