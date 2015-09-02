// ! ! !
// Three Bugs

var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];


//The task is to refactor your STI Calculator to use objects. 
// Use an object constructor for the employees, and create all 
// four employees using that constructor. 
// Also, create a constructor for your output data.

// Your list of employees and their output data can still be stored 
// inside of an array. This is in-fact pretty common practice. 
// For example, when you interact with a database you typically write 
// a query that retrieves all objects and puts them in an array, and 
// iterate over each of them, accessing their data by using their 
// properties by their keys. (Remember, "properties" are just key value pairs.)

// Try to avoid using object literals for the employees and their output data. 
// You may use object literals for any other data (such as configuration data).


function Employee(employeeName, employeeNumber, baseSalary, reviewScore) {
    this.employeeName = employeeName;
    this.employeeNumber = employeeNumber;
    this.baseSalary = baseSalary;
    this.reviewScore = reviewScore;
}

var atticus = new employee("Atticus", "2405" , "47000", 3);
var jem = new employee("Jem", "62347", "63500", 4);
var boo = new employee("Boo", "11435", "54000", 3);
var scout = new employee("Scout", "6243", "74750", 5);



//Create variables used to write to the DOM

var newEl, newText, position;

console.log();

//Capture the position of insertion into the DOM
position = document.getElementById('content');



//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'

for(var i = 0; i < array.length; i++){

  
	array[i] = calculateSTI(array[i]); //change [i] after(array) 
 	newEl = document.createElement('li');
	newText = document.createTextNode(array[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

console.log(array);


function calculateSTI(array){
  var newArray = [];


  newArray[0] = ' ' + array[0];

  var employeeNumber = array[1];
  var baseSalary = array[2];
  var reviewScore = array[3];


  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }


  newArray[1] = ' ' + bonus ;
  newArray[2] = ' ' + Math.round(baseSalary * (1.0 + bonus)); //add rounding
  newArray[3] = ' ' + Math.round(baseSalary * bonus); //add rounding
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}


function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}


