$(document).ready(function(){
    var $results = $('#kittehs');
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/kittehs/2',
        complete: function(){
            console.log('Ajax Complete!');
        },
        success: function(data){
            console.log(data);
            var $li = $('<li>');
            if(typeof data == 'array') {
                data.forEach(function (elem) {
                    $li.text('Kitteh: ' + elem.name + ' Type: ' + elem.type + ' id: ' + elem.id);
                    $results.append($li);
                })
            } else{
                $li.text('Kitteh: ' + data.name + ' Type: ' + data.type + ' id: ' + data.id);
                $results.append($li);
            }
        },
        error: function(req, errorType, errorMessage){
            console.log('There was an error: ', errorMessage);
        }
    });
});

