
$(document).ready(function(){




function liz(about, why, where, when){

	this.about = about;
	this.why = why;
	this.where = where;
	this.when = when;
}

  var me = [new liz ("This is a test", " another test", " another test ", " another test"),
      new liz("This is a test", " another test", " another test", " another test"),
     new liz( "This is a test", " another test", " another test", " another test")
	    ];
  

  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);

  $(".content").html(template(me));

console.log(me);

});



