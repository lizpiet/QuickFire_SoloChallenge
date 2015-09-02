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
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
// Make it understandable
 
var x1, fe2, xbqne; //bad names
var counter = 10; // better
 
var incrementForMainLoopFromTenToTwenty; // also bad
// avoid describing a value with your variable or function name
 
function isOverEighteen(){}; // bad
 
function isLegalAge(){}; // better
 
// avoid globals
var current = null; // current can be accessed by other functions, perhaps unintentionally
 
function show(){
    current = 1;
}
function hide(){
    current = 0;
}
 
// module to avoid globals
var carousel = function(config){
    // using configuration
    var configuration = {
        CSS: {
            classes: config.CSS.classes || 'current',
            scrollContainer: 'scroll'
        },
        IDs: {
            maincontainer: 'carousel'
        },
        Settings:{
            amount: 5,
            skin: 'blue',
            autoplay: false
        }
    };
 
    var container = $(configuration.IDs.maincontainer);
 
    var current = null; // this is the current slide of the slideshow
    var init = function(){
 
        current = 0;
    };
    var show = function(){
        current = 1;
    };
    var hide = function(){
        current = 0;
    };
    return {init:init, show:show, hide:hide }
}
var mainCarousel = carousel();
mainCarousel.init();
mainCarousel.show();
mainCarousel.hide();
 
// avoiding mixing technologies
var form = document.getElementById('mainform');
var elements = form.elements;
for(var i = 0; i< elements.length; i++){
    elements[i].borderColor = '#f00'; // styling is a different technology.
    elements[i].borderStyle = 'solid'; // bad!
    elements[i].borderWidth = '1px'; // bad
 
    elements[i].className += ' error'; // better, using a class
}
// use short cuts, don't use new Array()
var lunch = new Array();
lunch[0] = 'Rice';
lunch[1] = 'Beans';
// better
var lunch = ['Rice', 'Beans'];
lunch = [];
 
// if statement that can be turned into OR (using ||)
if(v){
    var x = v;
}else{
    var x = 10;
}
var x = v || 10; // OR, shortcut!
 
// if statement that can be turned into ternary using ?
var direction;
if(x > 100){
    direction = 1;
}else{
    direction = -1;
}
 
var direction = (x > 100) ? 1 : -1; // ternary
 
// numbers, strings, booleans, use as primitives. not as objects
 
var x = 'John';
var y = new String('John'); // NO, don't use new String, that's an object!
if (x === y){
    alert('this will never work');
}
var o = new Object();
o = {};
 
// declarations on top
function employeeThing(){
    // vars on top
    var firstName = 'Scott', 
        lastName = 'Bromander', 
        age = 30; 
 
    // ...
 
    // use them later
    firstName = 'Joseph';
    lastName = 'Szczesniak';
    age = 30;
}
 
var i; // declare on top? Maybe. Scott likes to use var outside of for loop. I could care less.
for (i = 0; i < 5; i++){
    // do a thing
}
 
// using parameter defaults
function myFunction(x, y){
    if (y === undefined){
        y = 100;
    } if (x === undefined){
        x = 50;
    }
}
 
myFunction(10, 10);
myFunction(10);
myFunction();
 
 
// don't use shorthand
if(someVariable) // note missing brackets
    x = false;
    anotherFunction();
 
// turns into this:
if(someVariable){
    x = false;
}
anotherFunction(); // note this isn't in the if statement!
 
// build strings faster using joins on arrays, instead of for loops
arr = ['item 1', 'item 2',  'item 3'];
 
var list = '<ul>'; 
for (var i = 0; i < arr; i++){ // for loop
    list += '<li>' + arr[i] + '</li>';
}
list += '</ul>';
 
// faster
var list = '<li>' + arr.join('</li><li>') + '</li>' // join is faster
 
// avoid appending strings to the DOM (like above)
// better to use $('<li>'); or document.createElement('li');
var ul = $('.someUL');
ul.append('<li>some text</li>'); // don't append a string like this
 
var li = $('<li>'); // better! Using $('<element>')
li.text('some text');
ul.append(li);