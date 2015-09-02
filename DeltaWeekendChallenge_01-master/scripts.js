$(document).ready(function(){

// form submit

	var $form = $('#EmployeeInfo');
	var $firstName = $('#firstName');
	var $lastName = $('#lastName');
	var $employeeNumber = $('#employeeNumber');
	var $title = $('#title');
	var $lastReview = $('#lastReview');
	var $salary = $('#salary');
	var $Employees = $('#Employees');

	$form.on('submit', function(e){
		e.preventDefault();
			var employee = new Employee(
				$firstName.val(),
				$lastName.val(),
				$employeeNumber.val(),
				$title.val(),
				$lastReview.val(),
				$salary.val()
	);
	appendEmployee(employee);
});


// constructor for employee

	var Employee = function(firstName, lastName, employeeNumber, title, lastReview, salary){
		this.firstName = firstName;
		this.lastName = lastName;
		this.employeeNumber = employeeNumber;
		this.title = title;
		this.lastReview = lastReview;
		this.salary = salary;

	}


//object to store employees in

//function to append employees


function appendEmployee(emp){
	var $li = $('<li>');
	$li.attr('class', 'lastReview' + emp.lastReview );
		$li.text(
				emp.firstName + ', ' + 
				emp.lastName + ', ' +
				emp.employeeNumber + ', ' +
				emp.title + ', ' +
				emp.lastReview + ', ' +
				emp.salary + '.'
				);
	var $button = $('<button>');
		$button.text('Delete');
		$button.attr ('class', 'js-delete');
		$li.append($button);
		$Employees.append($li);

			}


//function to delete function


		$Employees.on('click','.js-delete', function(e){
			e.preventDefault();
				$(this).parent().remove();
		})

		});


	

















































//     var employee = {};

// $("#form").submit(function(event){
// event.preventDefault();

// var $output = $("form :input")

// }

// $output.each(function(){
// 			values[this.name] = $(this).val();

// });


// 	var reviewNum = "review"+values.lastreviewscore;
// 	$("body").append("<div class='employee " +reviewNum+"></div>");
// 	var $el = $("body").children().last();




// 	$el.append("<p>"+values.firstName+"</p><p>"+values.lastName+"</p><p>"+values.employeeNumber+"</p><p>"+values.title+"</p><p>"+values.lastReview+"</p><p>"+values.salary+"</p>");
// 	$el.append("<button class='submit'>Delete Employee</button>");

// 	});




// 	$("body").on('click', '.submit', function() {
// 		$(this).closest(".employee").remove();
// 	});


// });


// var employee = function(firstName, lastName, employeeNumber, title, lastReview, salary) {
// this.firstName = firstName;
// this.lastName = lastName; 
// this.employeeNumber = employeeNumber; 
// this.title = title;
// this.lastReview = lastReview; 
// this.salary = salary;
// };


//  list = document.createElement("li");
//  newText = document.createTextNode(firstName + " " + lastName + " " + employeeNumber + " " + " " + title + " " + lastReview + " " + salary);
// 	list.appendChild(list);
// 	employee.appendChild(employee);

//   }

// document.getElementById("employee").submit();


// <div id = "info"> 

// <ul id = "output"> 

// </ul>
// </div>


// Atticus = new Employee('Atticus', 24005, 47000, 3); 
// Jem = new Employee('Jem', 62347, 63500, 4);
// Boo = new Employee('Boo', 11435, 54000, 3);
// Scout = new Employee('Scout', 6243, 74750, 5);


// var array = [Atticus, Jem, Boo, Scout];
// console.log(array);


// var Result = function(name, bonusPercent, salary, bonus) {
// this.name = name;
// this.bonusPercent = bonusPercent; 
// this.salary = salary; 
// this.bonus = bonus;
// };


