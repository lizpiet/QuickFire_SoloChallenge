// (shortcut to making a class or id = just wrte . or # in front)


memes.jade

.row
	.meme(style="background: " + meme.src)
		img(src = memes.src)


index.jade
var memes = require

extends layout
block content
	each meme in memes
		include ./memes.jade



index.js



// line 6 use to test 
var memes = [{"test" : "something"}], ;





models.json (in new models folder)

[
{   "id" : 1,
	"src": "/images/firstworld-world.jpg"},
{	"id" : 2,
	"src": "/images/firstworld-world.jpg"},
{	"id" : 3,
	"src": "/images/firstworld-world.jpg"},
{	"id" : 4,
	"src": "/images/firstworld-world.jpg"},
{	"id" : 5,
	"src": "/images/firstworld-world.jpg"}
]

// in a database, id's are good to have.

// Look up guids - non sequential numbers, used for users, unique identifiers, hard to guess

index/jade, [memes]

	memes.jade
	index.html






styles.ass


messages.json

[
{   "id" : 1,
	"text": "blah bla"},
{	"id" : 2,
	"text": "blah bla"},
{	"id" : 3,
	"text": "blah bla"},
{	"id" : 4,
	"text": "blah bla"},
{	"id" : 5,
	"text": "blah bla"},
]








