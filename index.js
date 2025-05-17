let text = `the child walked to the market`
let newText = text.charAt(0).toUpperCase() + text.slice(1);
console.log({newText});

let string = 'Adalab'
let newString = string.slice(0,2) + 'r' + string.slice(2);
console.log({newString});

let str = "hello world, hello Javascript"
let word = "hello"
let count = str.split(word).length - 1;
console.log({count});

let a = "adalab"
let last3 = a.slice(-3);
console.log({last3});

let b = "adalab"
let first3 = b.substr(0 ,3);
console.log({first3});

let c = "adalab"
let sorted = c.split("").sort().join("")
console.log({sorted});

let d = "hello world"
let spaced = d.replace(" ","");
console.log({spaced});

let e = `greetings`
let find = e.indexOf(`t`)
console.log({find});

let f = "adalab"
let delete2 = f.substring(2);
console.log({delete2});

let g = "adalab"
let deleteLast2 = g.substring(0, g.length-2)
console.log({deleteLast2});
