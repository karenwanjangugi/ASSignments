//You are building a feature rollout system for a startup where a FeatureToggle constructor function 
//has properties: featureName (string), isEnabled (boolean), and userGroupAccess (array of strings like 
//"betaTesters", "admins"), and you must use a prototype method canAccess(userRole) to return true or false, 
//a method toggleFeature(flag) to enable or disable the feature, and simulate access attempts using if-else and switch 
//statements for different roles.

const { it } = require("node:test");



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

//In a freelancer time-tracking platform, create a TimeLog constructor function with properties: freelancerName 
//(string), projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked), 
//then add prototype methods to calculate total earnings, filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.
function Timelog(freeLancerName,projectDetails,logs){
  this.freeLancerName = freeLancerName
  this.projectDetails = projectDetails
  this.logs = logs
}


//You are developing a startup’s order management system where an Order constructor function should contain customer (object with 
//name and email), items (array of objects with productName, quantity, and unitPrice), and status (string), then implement prototype methods 
//to compute total cost, update order status based on payment, and categorize order urgency using switch and conditional statements.
function Order(customer,items,status){
  this.customer = customer
  this.items = items
  this.status = status

}

//In a startup’s employee review tool, design an Employee class with properties: id (number), name (string), performanceMetrics 
//(object with keys like communication, efficiency, and reliability), and feedback (array of strings), then use prototypes to 
//calculate an average score, classify performance level using control flow, and add new feedback based on conditions.

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
    // if (values.length === 0){
    //   return 0;
    // }
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
  
//Build a simple e-learning system where a Course class has properties: title (string), instructor (object with name and expertise), 
//and students (array of objects with name and completionStatus), then add prototype methods to return names of students who completed the course, 
//count enrolled students by expertise area, and use control flow to output different messages for instructors with more or less than 5 students.

class Course{
  constructor(title,instructor,students){
    this.title = title
    this.instructor = instructor //object with name and expertise
    this.students = students //array of objects with name and completionStatus
  }
}

Course.prototype.completed = function(){
  for (let i = 0; i > this.students.length; i++){
    const student = this.students[i];

    if(student.name === "completed"){
      return `${student.name} has successfully completed the course`
    }

    console.log({student});
    
  }


}

const studentCourse = new Course(
  "mathematics",
  {name: "Mr.John", expertise: "calculus"},
  [{name: "Joy", completionStatus: "completed"},{name: "Andrews", completionStatus: "not completed"}]
)

// console.log(studentCourse.completed());