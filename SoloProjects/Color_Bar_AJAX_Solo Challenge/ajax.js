
$(document).ready(function() {
 
    $.ajax('data.json', {
        success: function(response){
        		console.log(response);
        	//for loop goes here

        	for( var i = 0; i < response.length; i++) {
        			var $newDiv = $('<div>');
        			var $newP = $('<p>');
        				$('body').append($newDiv);
        				$('body').children().last().append($newP);
        				$('body').children().last().children().first().text(response[i].color);
        				$('body').children().last().addClass(response[i].color);

        	}


            
        },
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });
 
})








