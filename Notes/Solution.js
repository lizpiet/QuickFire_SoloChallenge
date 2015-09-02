1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];
 
var employees = [arrayAtticus, arrayJem, arrayBoo, arrayScout];
 
//employee expects an array
// of name, employee number, salary, and rating
function calcEmployee(employee){
  var calculatedEmployee = [];
 
  // employee name
  calculatedEmployee.push(employee[0]);
 
  // STI is a percentage, ie .012
  var sti = stiCalc(employee[3], employee[2], employee[1]);
 
  calculatedEmployee.push(sti);
 
  var bonus = Math.round(parseInt(employee[2]) * sti);
 
  // adjusted annual compensation (base salary + STI total)
  calculatedEmployee.push(employee[2] + bonus);
 
  // total bonus rounded to nearest dollar
  calculatedEmployee.push(bonus);
 
  return calculatedEmployee;
}
 
 
function stiCalc(rating, income, employeeNum){
  var sti = 0;
  switch (parseInt(rating)) {
    case 3:
      sti = 0.04;
      break;
    case 4:
      sti = 0.06;
      break;
    case 5:
      sti = 0.1;
      break;
    default: // 2 or below
  }
 
  if(employeeNum.length == 4){
    sti += .05;
  }
  if(parseInt(income) > 65000){
    sti -= .01;
  }
  if(sti > .13){
    sti = .13;
  }
  return sti;
}
 
var finalEmployees = [];
employees.forEach(function(emp){
  finalEmployees.push(calcEmployee(emp));
})
console.log(finalEmployees);