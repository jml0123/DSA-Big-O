// COUNTING SHEEP
//O(n)
const countingSheep = (numSheep) => {
    if (numSheep !== 0){
        console.log(`${numSheep}: Another sheep jumps over the fence`)
    }
    else {
        return "All sheep jumped over the fence"
    }
    return countingSheep(numSheep - 1)
}
console.log(countingSheep(3))

// POWER CALCULATOR
//O(n)
const powerCalculator = (base, exponent) => {
    if (exponent === 1) {
        return base
    }
    if (exponent <= 0) {
        return "exponent must be a positive number"
    }
    return base * powerCalculator(base, exponent - 1)
}
console.log(powerCalculator(10, 2))
console.log(powerCalculator(10, -1))

// REVERSE STRING
//O(n)
const reverseString = (string) => {
    return (!string.length) ? string : string.slice(-1) + reverseString(string.slice(0, -1))
}
console.log(reverseString("planter"))

// nth TRIANGULAR NUMBER
//O(n)
const nthTriangle = (n) => {
    return (n === 1)? n : n + nthTriangle(n-1)
}
console.log(nthTriangle(4))

// STRING SPLITTER
//O(log(n))
const stringSplit = (str, separator) => {
    if(str.indexOf(separator) === -1) {
        return str
    }
    return [str.slice(0, str.indexOf("/"))].concat(stringSplit(str.slice(str.indexOf("/")+1), separator))
}

console.log(stringSplit("02/20/2020", "/"))

// FIBONACCI 
// O(n)
const fibonacci = (n) => {
    if (n === 1) {
        return [0 ,1]
    }
    const sequence = fibonacci(n - 1)
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
    return sequence
}
console.log(fibonacci(7))

// FACTORIAL 
// O(n)
const factorial = (n) => {
    if (n === 1) {
        return n
    }
    return n * factorial(n - 1)
}
console.log(factorial(5))