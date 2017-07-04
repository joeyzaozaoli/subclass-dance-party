$(document).ready(function() {

  window.audio = new Audio('asset/swan_lake.mp3');
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    dancers.push(dancer);

    if (audio.paused) {
      audio.play();
    }
  });

  $('.lineUpButton').on('click', function() {
    for (var i = 0, left = 100; i < dancers.length; i++) {
      dancers[i].setPosition(650, left);
      left += 50;

      if (dancers[i].$node.hasClass('ballet-dancer-right')) {
        dancers[i].$node.removeClass('ballet-dancer-right');
      } else if (dancers[i].$node.hasClass('ballet-dancer-left')) {
        dancers[i].$node.removeClass('ballet-dancer-left');
      }
    }
  });
});

