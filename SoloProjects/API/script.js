var apikey = '508196800413abeba8ad199226324f79'; // Put your API key here

// Use this function to do stuff with your results. 
// It is called after 'search' is executed.
function searchCallback(data) {
	console.log(data);
	var content = $('#results'); 
	content.empty();
	data.data.forEach(function(element, index){
		
		var $newDiv = $('<div>');		
		var $newP = $('<p>');
		// "brewerydb.com/beer"+element.id
		$newP.text(element.style.name);
		$newDiv.text(element.description);
		$newDiv.append($newP);
		content.append($newDiv);
	});
}

$(document).ready(function() {
	$('#go').on('click', function(e){
		var query = $('#search').val();
		console.log('Searching: ', query);
		search(query);
	})
});

function search(query){
	console.log('In search: ', encodeURI(query));


	$.getJSON 
		('http://api.brewerydb.com/v2/search?q=' + encodeURI(query) + '&type=beer&key=' + apikey, {
			format: 'json'
		})
	
        
	.always(function() {
			console.log('Ajax attempt complete.');
		})
	.done(function(response) {
			searchCallback(response);
		})
	.error(function(response) {
			console.log('Ajax failed: ');
		});

		// Set another completion function for the request above
		// You can set multiple always, done and fail functions like this
	
	
};







	// Start the search here!
// Example 1 - Cross Site Error
	/*$.ajax ({
	    type: 'GET',
	    dataType: 'json',
	    crossDomain: true,
	    url: 'http://www.giantbomb.com/api/search/?format=json&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
	    complete: function() {
	        console.log('ajax complete');
	    },
	    success: function(data) {
	        searchCallback(data.results);
	    },
	    error: function(){
	    	console.log('error!');
	    }
	});*/

// Example 2: Using JSONP
/*$.ajax ({
	type: 'GET',
	dataType: 'jsonp',
	crossDomain: true,
	jsonp: 'json_callback',
	url: 'http://www.giantbomb.com/api/search/?format=jsonp&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
	complete: function() {
		console.log('ajax complete');
	},
	success: function(data) {
		searchCallback(data);
	}
});*/

// Example 3, using CORS
	/*$.ajax({
		type: 'GET',
        url: 'http://updates.html5rocks.com',
        crossDomain: true,
        dataType: 'html',
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status) {
            alert('Error: ' + status);
        }
    });*/

// Example 4: Using JSONP, combined with new callback functions

