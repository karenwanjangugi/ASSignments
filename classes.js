//You are building a feature rollout system for a startup where a FeatureToggle constructor function 
//has properties: featureName (string), isEnabled (boolean), and userGroupAccess (array of strings like 
//"betaTesters", "admins"), and you must use a prototype method canAccess(userRole) to return true or false, 
//a method toggleFeature(flag) to enable or disable the feature, and simulate access attempts using if-else and switch 
//statements for different roles.



function FeatureToggle(featureName, isEnabled, userGroupAccess) {
    this.featureName = featureName,
    this.isEnabled = isEnabled,
    this.userGroupAccess = userGroupAccess
       
}

FeatureToggle.prototype.canAccess = function(userRole){


}
FeatureToggle.prototype.toggleFeature = function(flag){
  
}


//In a freelancer time-tracking platform, create a TimeLog constructor function with properties: freelancerName 
//(string), projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked), 
//then add prototype methods to calculate total earnings, filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.


//You are developing a startup’s order management system where an Order constructor function should contain customer (object with 
//name and email), items (array of objects with productName, quantity, and unitPrice), and status (string), then implement prototype methods 
//to compute total cost, update order status based on payment, and categorize order urgency using switch and conditional statements.


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
    console.log(this.performanceMetrics);
    
    let sum = 0;
    // if (values.length === 0){
    //   return 0;
    // }
    for (let i = 0; i < values.length; i++) 
    // const sum = values.reduce((acc, curr) => acc + curr, 0);
      sum += values[i];
      // count++;
      console.log({sum});
      console.log(values.length)
    
    let avg = values.length > 0 ? sum/values.length : 0;
  
    console.log({avg});
  
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

