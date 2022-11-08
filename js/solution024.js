// This kata is about multiplying a given number
// by eight if it is an even number and by nine otherwise.


function simpleMultiplication(number) {
    // your code........
// multiply any given number by 8
return number * ( number % 2 ? 9 : 8)
// or else by 9
}

