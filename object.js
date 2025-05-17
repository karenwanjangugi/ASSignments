//Create a function constructor called Employee that accepts a name,
// position, and salary. Create an array of 5 employees. Write a program 
//that increases the salary by 10% for employees who have the position "developer"
// and print the updated employee list. (5 pts)

function Employee(name,position,salary){

    this.name = name;
    this.position = position;
    this.salary = salary
    
    }
    
    let employees=[ 
      new Employee("John","developer",100000),
      new Employee("Jane","Manager",102000),
      new Employee("Happy","CEO", 500000),
      new Employee("Angel","Engineer", 300000),
      new Employee("Max","developer", 470000)
      
    ]
    
    employees.filter(employee => {
    
      if(employee.position == "developer"){
        employee.salary*= 1.10
      }
    })
    console.log(employees);
    
    //Given an array of product objects (each with name, price, and inStock properties), write a function 
    //that returns a new array containing only the products that are inStock: true, and sort the available 
    //products by price in ascending order. (5 pts)
    
    function instockProducts(products) {
      let presentProducts = products.filter(product => product.inStock === true)
          presentProducts.sort((a,b) => a.price - b.price) 
    
          console.log (presentProducts);
        
      
      
    }
    let products = [
      {name: "bottles",
        price: "100",
        inStock: true
      },
      {name: "combs",
        price: "50",
        inStock: true
      },
      {name: "chairs",
        price: "100",
        inStock: false
      },
      {name: "tables",
        price: "100",
        inStock: false
      },
      {name: "bags",
        price: "200",
        inStock: true
      }
    
    ]
    
    
    instockProducts(products)
    
    
    
    
    //Create an object called grades where the keys are student names 
    //and the values are arrays of their scores. Write a function that 
    //calculates and prints each student's average score, and if the average 
    //is above 70, print "Pass"; otherwise, print "Fail" next to their name. (5 pts)


    function calculateGrades(grades){

       for(let student in grades){
        let marks = grades[student]
        // console.log(marks);
        let sum = 0;
        
        let average = marks.reduce((sum,mark)=> sum + mark,0)/marks.length

    

        if(average >= 70){
            console.log(` ${student} you have an average of ${average} and you have passed`);
        }
        else{
            console.log(` ${student} you have an average of ${average} and you have failed`);
            
        }     
    }
        
    } 
  let grades = {
    "Sally": [90,45,98,78,76],
    "Santana": [20,66,38,78,76],
    "Sammy": [17,45,34,12,70],
    "Nathan": [63,4,68,78,76],
    "Samson": [70,65,91,62,76],

  }
  calculateGrades(grades)
    
    
    
    
    //Write a function constructor called User that takes username, email, and isActive (boolean). 
    //Create an array of users. Write a program that loops through the array and deactivates users 
    //who have not logged in recently (simulate this with a random isActive: false assignment) and 
    //print out the usernames of active users. (5 pts)

    function User(username,email,isActive){
        this.username = username;
        this.email = email;
        this.isActive = isActive;
    }


    let users = [
        new User("Rena" ,"rena@gmail.com",false),
        new User("Rene" ,"rene@gmail.com",true),
        new User("Reni" ,"reni@gmail.com",true),
        new User("Reno" ,"reno@gmail.com",false)
        
    ]

    users.map(user)
    





    //You have an array of destination objects, each with name, distance (in km), and budgetRequired (
    //in dollars). Write a function that accepts a maximum distance and a budget and returns all destinations 
    //the user can afford and reach within that distance. If none are found, return "No destinations available 
    //under your budget and distance". (5 pts)

    function destinations(){
        let destinationsFound = destinationObjects.filter(destination =>
            destination.distance <= 100 && destination.budgetRequired <= 800
         ) 
      
        

        if (destinationsFound.length > 0){
            console.log(destinationsFound);
        }
        else{
            console.log("none");
            
        }


    }
    let destinationObjects = [
        {name: "Nairobi", distance: 12, budgetRequired: 200},
        {name: "Kisumu", distance: 242, budgetRequired: 800},
        {name: "Mombasa", distance: 431, budgetRequired: 1000},
        {name: "Nakuru", distance: 128, budgetRequired: 300},
        {name: "Kajiado", distance: 20, budgetRequired: 200}
    ]

    destinations(destinationObjects)