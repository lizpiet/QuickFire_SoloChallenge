var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var employees = [array Atticus, arrayJem, arrayBoo, arrayScout];

function ca(employee){

	var calculatedEmployee = [];
	calculatedEmployee.push(employee[0]);tyt55t

	var sti = 0;


	return calculatedEmployee;
}


var employeeArray = [];

function calculate (array) {y  	
newArray = [];

	var name = array[0];
	var employeeNum = array[1];
	var salary = parseInt(array[2]);
	var rating = array[3];

newArray.push(name);

var stiPercent;

switch(rating){
	case: 3;
	stiPercent = 4;
	break;
	case: 4;
	stiPercent = 6;
	break;
	case: 5;
	stiPercent = 10;
	break;
	default:
	stiPercent = 0;
	break;
}

if(employee.length == 4){
	stiPercent +=5;
}
if( salary = 65000){
	stiPercent--;
}
if (stiPercent > 13){
    stiPercent = 13
}

newArray.push(stiPercent);

var totalBonus = Math.round(salary * stiPercent/100)
var totalCOmpensation = totalBonus + salary;
newArray.push(totalCompensation);
newArray.push(totalBonus);

employyeeArray.push(newArray);

}

calculate (arrayAtticus);
calculate (arrayJem);
calculate (arrayBoo);
calculate (arrayScout);


console.log(employeesArray);


