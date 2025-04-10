const { log } = require("console");

function stringLength(arr){
    const stringLength = arr.map(str => str.Length);
    return stringLength;

}
let string = ["cat","goat","cow"]
console.log({stringLength});

function filterEven(arr){

    const evenNums = evenNums.filter(num => num%2===0);

     return  evenNums
}
let evenNums = [2,45,23,675,44]
console.log({evenNums});

function topStudents(students){
    const topStudents = students.filter(student => student.score > 75)
    .map()
}

console.log({topStudents});


function squareOfNumbers(arr){
    const squareOfNumbers = arr.map(num =>num*num);
} 

console.log({squareOfNumbers});

function toUppercaseofstring(arr){
    const stringsUppercase = arr.filter(item => typeof item === 'string')
    .map(str => str.toUpperCase());
}
console.log({stringsUppercase});
