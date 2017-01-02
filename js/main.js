
$(document).ready(function(){

  $('a').click(function(){
    $(this).addClass("visited");
  });
  
  $(function() {
    var animationName = "animated rubberBand";
    var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    $('#about').hide();
    $('#title').on('click', function() {
      $(this).animate({
        'marginLeft' : "-=120px"
      });
      $(this).addClass(animationName).one(animationEnd, function(){
        $(this).removeClass(animationName);
        $('.parallax_section').addClass('visible'); 
        $('#about').fadeIn(function(){
          $(this).addClass('animated shake');
        });
      });
    });
  });

  /*************
  TWITTER WIDGET
  **************/
  window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };

    return t;
  }(document, "script", "twitter-wjs")); 
});