
$(function() {
  var animationName = "animated rubberBand";
  var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
  $('#title').on('click', function() {
    $(this).addClass(animationName).one(animationEnd, function(){
      $(this).removeClass(animationName);
    });
  });
});