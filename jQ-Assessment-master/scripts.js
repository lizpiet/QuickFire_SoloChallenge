
// // Create a project that has: An index.html file, a scripts.js file, a styles.css file, 
// and a minified version of jQuery (CDN or local, that’s up to you).




// // Once you are complete, check in the code into your personal GitHub, entitling the Repo 
// “prime_solo_jq_assessment”. Then, be respectful that some of your peers are still working and 
// remain quiet. Feel free to exit the room once complete if you are feeling like you can no longer 
// contain yourself. The goal is to not overwhelm those who are still working.
// // However much you finish, know that I am proud of how far you have come in a week and a 
// half. You got this. Now go break this challenge down.

$(document).ready(function(){
// In your HTML, include a ‘generate’ button, that when clicked, will generate a new 
// div container in the index.html. The new div should include some text that reads “Line #” 
// and then a number specific to the number of times the generate button has been clicked. 
	var i=1;
	$('.button').on('click', function(e){
		e.preventDefault;
		var $newDiv=$('<div> Line #: '+i+' </div>');
		$newDiv.attr('id', 'line');
		$('.count').append($newDiv);


// In addition to the text, you will need to include two buttons within the new div. One button 
// will be entitled “Change Color” and the other button will entitled “Remove”.
		var $colorBtn=$('<button> Change Color</button>');
        $colorBtn.attr('class', 'color'); //set button class so we can select it later

		var $removeBtn=$('<button> Remove </button>');
		$removeBtn.attr('class', 'remove'); 

		$('.count').append($colorBtn, $removeBtn);
		i++;
		return i;
	})

// The Change Color button should change the background color of the div container 
// relative to the Change Color button that was clicked.
//NOTE: I have tried about a billion different selectors and cannot isolate $(this) div
	$('.count').on('click', function(e){
		e.preventDefault;
		$(this).addClass('bright');
	
})
// The Remove Button should remove the parent Div container of the button that was clicked, 
// removing the entire div, which contains the text, and the two additional buttons (the Change 
// Color and Remove buttons).
		$('.count').on('click', '.remove', function(e){
		e.preventDefault;
		$(this).parent().remove();
})
})