
$(document).ready(function(){




function liz(about, why, where, when){

	this.about = about;
	this.why = why;
	this.where = where;
	this.when = when;
}

  var me = [new liz ("Born", " Raised by Wally and Karen", " South Minneapolis ", " 1981"),
      new liz("Style", " ", " Chapelle", " realworld@test.com"),
     new liz( "Interests", " Film", " Cooking", " Kickboxing")
	    ];
  

  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);

  $(".content").html(template(me));

console.log(me);

});



