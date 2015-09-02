// Make it understandable

var x1, fe2, xbqne ; //bad news
var counter = 10; // better


var incrementForMainLoopFromTenToTwenty; //aslo bad
//avoid decribing a value with your variable or function name.


function isOverEighteen(){}; // bad, decribes a value, not the function

function isLegalAge(){}; // better


//avoid using global variables as much a possible.

var current = null; //curent can be accessed by other functions, perhaps unitentionally

function show(){
	current = 1;
}

function hide (){
	curent = 0;
}

//module
var visible = function(){
var current = null;

};

var visible = function (){
current = 1;

};

var hide = function(){
	current = 0;
};

return {init: init, show: show, hide: hide}

var instanceOfVisible = visible();
instanceOfVisible.init();



//avoiding mixing technologies
var form = documnet.getElementById('mainform');
var elements = forms.elements;
for(var i = 0; i< elements.length; i++){
	elements[i].borderColor = '#foo'; //it is bad, very bad.
	// bad to mix different technology
	elements[i]borderStyle = 'solid'; //bad
	elements[i]borderWidth = '1px'; //bad

	elements[i].className +='error'; // better

}


var lunch = new Array(); // use shortcuts....
lunch[0]= 'Rice';
lunch[1]= 'Beans';

var lunch = ['Rice', 'Beans']; //better
lunch = [];


if(v){
	var x = v;
} else {
	var x = 10;
}
var x = v || 10; // ternary statement(3 part statement) // OR shortcut




var direction;
if (x > 100) {
	direction = 1;
}else{
direction = -1;
}

var direction = (x > 100) ? 1 : -1; //ternary // same line as above

//numbers, strings, booleans, use as primitives. not as object.
var x = 'John';
var y = new String('John'); //No!!!
if (x === y){

}


var o = new Object();
o = {}  

// using parameter defaults
function myFunction(x,y){
	if (y){
		y === undefined;
	}if (x){
		x === undefined;
	}
}



myFunction (10,10);
myFunction (10);
myFunction ();


//dont use shorthand
if(someVariable)
	x = false;
anotherFunction();

//turns into this:
if (someVariable){
	x = false;
}
anotherFunction();

arr = ['item 1', 'item 2', 'item 3'];


var list = '<ul>';
for (var i = 0; i < arr; i++){
	list +="<li>" + arr[i] + '</li>'
}
list += '<ul>';
//faster
var list = '<ul><li>' + arr.join('</li><li>') + '</li>'
//better to use $('<li>'); 

var carousel = function (){

	//configuration

	var config = {
		CSS: {
			classes:config.CSS.classes || 'current',
			scrollContainer:'scroll'
		},
	IDs: {
		maincontainer: 'carousel'
	},
	Setting:{
		amount:5,
		skin: 'blue',
		autoplay; false
	}
};



//declarations on top

function employeeThing(){
	var firstName, lastName, age;  // chain them like this when you can.
	
	var firstName = 'Scott', 
	lastName = 'Brom', 
	age = 30;  // chain them like this when you can with info.


// ...


// use them later
	firstName = 'Joseph';
	lastName = 'Szczesniak';
	age = 30;
}
 	var 1; // delcare on top? Maybe..
 	for (i = 0; 1 < 5; i++){
 		// do a thing
 	}


















