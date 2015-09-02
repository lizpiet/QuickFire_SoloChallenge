//What is this even doing! 1-4

var value = 0;  
// 25

//step 1
value = augmentA(value);

	// value =	25


//step 2
for(var i = 0; i < 5; i++){
	value = value * i;
}
				
	console.log(value);		
			


// //step 3
// value = augmentB(value + 2);

// //step 4
// var a = 46;

// value = value + (a * a);

// a = 2;

// //step 5
// for(i = 0; i < 9; i++){
// 	value--;
// }

// //step 6
// var b = a + 43;

// value += b;

// //step 7
// var c = "89";

function augmentA(val){
	val += 5;
	val = val * val;
	return val;
}

			// val = 5
			// val = 5 * 5 
			// val = 25
			// (step 1)


// function augmentB(val){
// 	val = augmentA(val) * 2;
// 	val -= 3;
// 	return val;
// }

// //What is value + c?
// console.log(value + c);




