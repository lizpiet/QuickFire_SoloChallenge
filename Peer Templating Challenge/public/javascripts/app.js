$(document).ready(function(){

    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);

    $('form').on('submit', function(e){

        var $this = $(this);

        e.preventDefault();
        var input = $(this).serializeArray()[0];
        var id = $(this).children("[name=message]").attr('id');
        var data = {
            id: id,
            text: input.value
        };
        console.log(data);
        $.ajax({
            url: '/messages',
            type: 'POST',
            data: data
        }).done(function(response, textStatus, jqXHR){
            console.log('Success!');

            var html = template({ message: data });
            if($this.siblings().length > 1) {
                $this.siblings().last().after(html);
            } else {
                $this.after(html);
            }

        }).fail(function( jqXHR, textStatus, errorThrown ) {
            console.log(jqXHR, textStatus, errorThrown);
        }).always(function(){
           console.log('Ajax Complete!');
        });
    })
});