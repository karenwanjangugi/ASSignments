<<<<<<< HEAD
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
=======
//CONTROL FLOW ASSIGNMENT
//A user has 3 attempts to log in. Simulate failed login attempts using while. After 3, show "Account locked".


function login() {
  let login = 1
  while (login <= 3) {
console.log("Failed");
login ++
if(login >3){
  console.log("Account blocked");
  
}

  }

}
login()

//Users are voting on a feature. Use do...while to log each vote from an array until all votes are processed.
function userVotes(){

for( let i = 0; i< votes.length; i++)
  do{
    
    console.log(`vote: ${votes[i]}`);
   
  }
  while(votes > 0){
    console.log("All votes processed");
    
  }
}
let votes = ["yes","no","yes"]
userVotes()





//Loop through an array of numbers from 1–7 and use a switch to print the corresponding day name.
function daysOfTheWeek(dayNumbers) {
  daysNumbers.forEach(day => {
    switch (day) {
      case 1:
        console.log("Sunday");
        break;

      case 2:
        console.log("Monday");
        break;

      case 3:
        console.log("Tuesday");
        break;

      case 4:
        console.log("Wednesday");
        break;

      case 5:
        console.log("Thursday");
        break;

      case 6:
        console.log("Friday");
        break;

      case 7:
        console.log("Saturday");
        break;



      default:
        console.log("Day not found");

        break;
    }

  });


}
let daysNumbers = ([1,9,6,7,5,4,3,2])
daysOfTheWeek(daysNumbers)





//Given an array of password strings, use if...else to: log "Strong" if length >= 8, and "Weak" otherwise.

const strongPassword = (password) => {
  for( let i = 0; i < password.length; i++){
    if(password[i].length >= 8){
      console.log("Strong");
      
    }
    else{
      console.log("Weak");
      
    }
  }
}
let password = ["heyworld","ftyui","Karenwan"]
strongPassword(password)




//You're building a multilingual site. Use a switch to show greetings based on language codes. I.e "en" → "Hello", "fr" → "Bonjour", "sw" → "Habari".

function multiLingual(language){
  language.forEach(greeting => {
    switch(greeting){
      case "en":
        console.log("Hello");
        break;
      case "fr":
        console.log("Bonjour");
        break;
      case "sw":
        console.log("Habari");
        break;
      default:
        console.log("Language not found")
              
      
    }

  })

}
let language = ["en","sw","fr","sp"]
multiLingual(language)





//You're building a weather dashboard. Loop through an array of temperatures and: If above 30, log "High heat alert!", else if below 15, log "Cold alert!", else, log "Normal conditions"

function weather(temperatures){
  for (let i = 0; i < temperatures.length; i++){
    if(temperatures[i] > 30){
      console.log("High heat alert!");
      
    }
    else if(temperatures[i] < 15){
      console.log("Cold alert!");
      
    }
    else{
      console.log("Normal conditions");
      
    }


  }
}
let temperatures = [45,57,21,12,44,22,15]
weather(temperatures)


//Users are queued to register. Use a while loop to remove and print each name until the queue is empty.

function printUserName(users){
  while(users.length > 0){
    let registered = users.shift()
    console.log(`${registered} has been registered`);
    
  }
  console.log("Queue is empty");
  
}
let users = ["Mary","Peter","John","Andrew"]
printUserName(users)



//Students retake a test until they score 50 or more. Use do...while to simulate attempts, increasing the score by 10 each time until it's >= 50.

function test(score){

  let attempt = 1
do{ 
  
console.log(`attempt:${attempt} score:${score}`);
attempt ++
score += 10 
}
while(score <= 50){
  console.log("Passed");
}
  
 
}
let score = 10
test(score)
>>>>>>> Javascript-control-flow/main
