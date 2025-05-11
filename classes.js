// //You are building a feature rollout system for a startup where a FeatureToggle constructor function 
// //has properties: featureName (string), isEnabled (boolean), and userGroupAccess (array of strings like 
// //"betaTesters", "admins"), and you must use a prototype method canAccess(userRole) to return true or false, 
// //a method toggleFeature(flag) to enable or disable the feature, and simulate access attempts using if-else and switch 
// //statements for different roles.

function FeatureToggle(featureName, isEnabled, userGroupAccess) {
    this.featureName = featureName,
    this.isEnabled = isEnabled,
    this.userGroupAccess = userGroupAccess
       
}

FeatureToggle.prototype.canAccess = function(userRole){
let whoCanAccess = this.isEnabled && this.userGroupAccess.includes(userRole)

console.log(whoCanAccess);

return whoCanAccess
}
FeatureToggle.prototype.toggleFeature = function(flag){
  this.isEnabled = flag;
   
  
}

const feature = new FeatureToggle("feature","true",["betaTesters", "admins"])

console.log(feature.isEnabled);


let userRole = "admins"

switch (userRole){
  case "admins":
  case "betaTesters":
    if (feature.canAccess(userRole)){
      console.log("Access granted");
      
    }else{
      console.log("feature not enabled");
      
    }
    break;
    default:
      console.log("Access denied");
      
}

// In a freelancer time-tracking platform, create a TimeLog constructor function with properties: freelancerName 
// (string), projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked), 
// then add prototype methods to calculate total earnings, filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.
function Timelog(freeLancerName,projectDetails,logs){
  this.freeLancerName = freeLancerName
  this.projectDetails = projectDetails
  this.logs = logs
}

Timelog.prototype.calculateTotalTime = function(){
  sum = 0
  for (i=0;i<this.logs.length;i++){
    sum += this.logs[i].hoursworked
    
    // console.log(sum);
    
  }
  
     return sum * this.projectDetails.hourlyRate
}
Timelog.prototype.filterDate = function(start,end){
   let dates = this.logs.filter(log => log.date >= start && log.date <= end) 

   return dates
}
Timelog.prototype.exceed = function(){
  let sum = 0
for (totalHours in this.logs.totalHours){
  sum += totalHours;

}
if (sum > 40){
  return true;
}else{
  return false;
}


}


const free = new Timelog (
  "Kelvin", {name:"feature", hourlyRate: 200},[
    {date:"22-3-2024",hoursworked: 8 },
    {date:"23-3-2024",hoursworked: 5 },
    {date:"24-4-2024",hoursworked: 7 },
    {date:"25-4-2024",hoursworked: 9 },
    {date:"26-4-2024",hoursworked: 3 },
    {date:"27-4-2024",hoursworked: 10 },
    {date:"28-4-2024",hoursworked: 3 }
  ]
)

 console.log(free.calculateTotalTime());
 console.log(free.filterDate("22-3-2024","26-3-2024"));
 console.log(free.exceed());
 

// //You are developing a startup’s order management system where an Order constructor function should contain customer (object with 
// //name and email), items (array of objects with productName, quantity, and unitPrice), and status (string), then implement prototype methods 
// //to compute total cost, update order status based on payment, and categorize order urgency using switch and conditional statements.
function Order(customer,items,status){
  this.customer = customer
  this.items = items
  this.status = status

}

Order.prototype.computeTotalCost = function(){
  return this.items
}

Order.prototype.updateOrderStatus = function(){
  if(this.status.includes("successful")){
    console.log("hhh");
  }
  else{
    console.log("kk");
    
  }

}

Order.prototype.categorize = function(){

}
const order = new Order(
  {name: "Lloyd", email: "Lloyd@gmail.com"},
  [{productName: "butter", quantity: 20, unitPrice: 200},
    {productName: "butter", quantity: 20, unitPrice: 200},
    {productName: "butter", quantity: 20, unitPrice: 200},
    {productName: "butter", quantity: 20, unitPrice: 200},

  ]
)

// //In a startup’s employee review tool, design an Employee class with properties: id (number), name (string), performanceMetrics 
// //(object with keys like communication, efficiency, and reliability), and feedback (array of strings), then use prototypes to 
// //calculate an average score, classify performance level using control flow, and add new feedback based on conditions.

class Employees{
    constructor(id,name,performanceMetrics,feedback){
      this.id = id
      this.name = name
      this.performanceMetrics = performanceMetrics
      this.feedback = feedback
    }
  }
  
  Employees.prototype.average = function(){
   
    // let sum = 0
    // let count = 0
  
    const values =  Object.values(this.performanceMetrics)
    // console.log(this.performanceMetrics);
    
    let sum = 0;
    for (let i = 0; i < values.length; i++) 
    // const sum = values.reduce((acc, curr) => acc + curr, 0);
      sum += values[i];
      // count++;
      // console.log({sum});
      // console.log(values.length)
    
    let avg = values.length > 0 ? sum/values.length : 0;
  
    // console.log({avg});
  
  let comment;
    if (avg > 10) { 
       comment =`${this.name}, Good job`; 
        this.feedback.push("Keep it up")
      
        
    }
    else{
      comment =`${this.name}, Pull up your socks`; 
      this.feedback.push("Improve!")
     
    }
    return {comment: comment, feedback: this.feedback}

    
  }
  
  
  
  
  const employee = [
    new Employees (
    "001",
    "John",
    {"communication": 8, "efficiency": 10, "reliance": 3},
    ["Could be better","Nice job"]
  
  ),new Employees (
    "002",
    "James",
    {"communication": 22, "efficiency": 10, "reliance": 17},
    ["He is good","Nice job"]
  
  )
  ]
  
  // console.log(employee.average());
  employee.forEach(emp => console.log(emp.average()));
  
// Build a simple e-learning system where a Course class has properties: title (string), instructor (object with name and expertise), 
// and students (array of objects with name and completionStatus), then add prototype methods to return names of students who completed the course, 
// count enrolled students by expertise area, and use control flow to output different messages for instructors with more or less than 5 students.

class Course{
  constructor(title,instructor,students){
    this.title = title
    this.instructor = instructor //object with name and expertise
    this.students = students //array of objects with name and completionStatus
  }
}

Course.prototype.completed = function(){
  return this.students.filter(student =>student.completionStatus === true)

}
Course.prototype.enrolled = function(expertise){
return this.students.filter(Course => this.instructor.expertise === expertise).length
}
Course.prototype.message = function(){
  if(this.students.length > 5){
    return `${this.instructor.name}, your class has a good number of students`
  }
  else{
    return `${this.instructor.name}, your class has few students: Update`
  }
}

const studentCourses = [
  new Course(
  "Mathematics",
  {name: "Mr.John", expertise: "calculus"},
  [
  {name: "Joy", completionStatus: true },
  {name: "Andrews", completionStatus: false },
  {name: "James", completionStatus: true },
  {name: "Andiah", completionStatus: false }
]

),
new Course(
  "Mathematics",
  {name: "Mrs.Jane", expertise: "analytical"},
  [
  {name: "Joy", completionStatus: true },
  {name: "Andrews", completionStatus: false },
  {name: "James", completionStatus: true },
  {name: "Andiah", completionStatus: false },
  {name: "Jameson", completionStatus: true },
  {name: "Andrea", completionStatus: false }
]),
new Course(
  "Mathematics",
  {name: "Mr.James", expertise: "algebra"},
  [
  {name: "Joy", completionStatus: true },
  {name: "Andrews", completionStatus: false },
  {name: "James", completionStatus: true },
  {name: "Andiah", completionStatus: false }
])]

// studentCourse.completed()

studentCourses.forEach(courses => console.log(courses.completed()));
studentCourses.forEach(courses => console.log(courses.enrolled("calculus")));
studentCourses.forEach(courses => console.log(courses.message()));
// console.log(studentCourses.enrolled());
