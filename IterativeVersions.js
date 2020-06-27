// COUNTING SHEEP
// O(n)
const countingSheep = (numSheep) => {
    while(numSheep !==0) {
        console.log(`${numSheep}: Another sheep jumps over the fence`)
        numSheep--
    }
    console.log(`All sheep have jumped over the fence`)
   
}
console.log(countingSheep(3))


// POWER CALCULATOR
// O(n)
const powerCalculator = (base, exponent) => {
    if (exponent === 1) {
        return base
    }
    if (exponent <= 0) {
        return "exponent must be a positive number"
    }
    let i = 1
    let newNum = base;
    while (i < exponent) {
        newNum *= base;
        i++
    }
    return newNum
}
console.log(powerCalculator(10, 2))
console.log(powerCalculator(10, -1))

// REVERSE STRING
// O(n)
const reverseString = (string) => {
    let reversed = ""
    for (let char of string) {
        reversed = char + reversed;
    }
    return reversed;
}
console.log(reverseString("planter"))

// nth TRIANGULAR NUMBER
// O(1)
const nthTriangle = (n) => {
    return (n * (n + 1)) / 2
}
console.log(nthTriangle(4))

// STRING SPLITTER
// O(n)
const stringSplit = (str, separator) => {
    let stringArray = []
    let sliced = '';
    for (char of str) {
        if (char === separator) {
            stringArray.push(sliced)
            sliced = ''
        }
        else {
            sliced += char
        }
    }
    return [...stringArray, sliced]
}
console.log(stringSplit("02/20/2020", "/"))

// FIBONACCI 
// O(n)
const fibonacci = (n) => {
    let sequence = [1, 1]
    for (let i = 2; i < n; i++){
        sequence[i] = sequence[i-1] + sequence[i-2]
    }
    return sequence
}
console.log(fibonacci(7))

// FACTORIAL 
// O(n)
const factorial = (n) => {
    if (n === 1) {
        return n
    }
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f *= i;
    }
    return f
}
console.log(factorial(5))