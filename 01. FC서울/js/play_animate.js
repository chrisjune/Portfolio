$(document).ready(function() {
    var width = $('#play').width();

    function goRight() {
        $('#play').animate({
        left: width
      }, 5000, function() {
         setTimeout(goLeft, 50);
      });
    }
    function goLeft() {
        $('#play').animate({
        left: 0
      }, 5000, function() {
         setTimeout(goRight, 50);
      });
    }

    setTimeout(goRight, 50);
});