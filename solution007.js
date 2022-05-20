// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s) {
    // console.log(s)
    return parseInt(s * (1/36)*1000)
} 

console.log(cockroachSpeed(1.08));//30
console.log(cockroachSpeed(1.09));// 30
console.log(cockroachSpeed(0));// 0


