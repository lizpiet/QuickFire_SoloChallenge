//What is this even doing! 2-2

var value = 65;




//step 1
for(var i = 0; i < 6; i++){ 
  value += i;
}

value += (i/2);
console.log(value);




//step 2
i = 10;

while(i > 0){
  value = augmentA(value);
  i = i - 2;
}



//step 3
if(value < 10){
  value = 50;
} else {
  value = 10;
}

augmentB(value);
console.log(value);
//step 4
var array = ["26", "45", "0"];

value = 1;

for(i = 0; i < array.length; i++){
  value += array[i];
}
console.log(value);



//step 5
parseInt(value);
value = value/450;
console.log(value);




//step 6
console.log(value);
value += parseInt(array.shift());
value += parseInt(array[array.length - 1]);




//step 7
if(value > 300){
	value = augmentA(array[0]);
} else {
	value = augmentB(array[0]);
}




//step 8
array.push(8);
array.push(9);
array.push(10);

value += i + array[i];

function augmentA(val){
  val = value - 2;
  return val;
}

function augmentB(val){
  if(val == 50){
    value = 20;
  } else {
    value = 10;
  }
}



//What does value equal?
console.log(value);



