$(function(){
  var $container = $('#container');
  var $generator = $('#generator');
  var colors = ['red', 'orange', 'yellow', 'green'];
  var counter = 1;

  // Click handler for creating new divs, inside the container
  $generator.on('click', function(event){
    var $remove = $('<button>', {class: 'js-remove'}).text('Remove');
    var $changeColor = $('<button>', {class: 'js-change'}).text('Change Color');
    var $div = $('<div>').text('Line # ' + counter++).append($remove).append($changeColor);

    $container.append($div);

  });

  // click handler for removing the parent div 
  $container.on('click', '.js-remove', function(event){
    $(this).parent().remove();
  });

  // click handler for changing the class of the parent div 
  $container.on('click', '.js-change', function(event){
    if($(this).parent().attr('class')){ // check if the element has a class
      $(this).parent().removeClass();
    } else{ // pick a random color from the array
      var randomIndex = randomNumber(0, colors.length - 1);
      $(this).parent().addClass(colors[randomIndex]);
    }
  });

});

/**
@method randomNumber Generates a random number
@param min {integer} The minimum of the random number
@param max {integer} The maximum of the random number
*/
function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}