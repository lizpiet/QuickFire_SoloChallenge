

// Ajax Notes

$(document).ready(function()

	$.ajax('data.json', {
		type: 'get',
		sucess:function(response){
			console.log(response);
	},
		error:function(request, errorType, errorMessage, errorMessage){
			alert(errorType + " " + errorMessage );

		}
	});

})




Put in Terminal:
python -m SimpleHTTPServer