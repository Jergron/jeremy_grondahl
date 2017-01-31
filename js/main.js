
$(document).ready(function(){
  
  $('a').click(function(){
    $(this).addClass("visited");
  });
  var images = [];
      function preload() {
        for (i = 0; i < preload.arguments.length; i++) {
          images[i] = new Image();
          images[i].src = preload.arguments[i];
        }
      }
      preload(
        "../images/john-towner-min.jpg",
        "../images/john-towner-min.png"
      );

  $(window).load(function() {
    $('#overlay').fadeOut();
    $('#title').addClass('animated zoomIn');
    $('#about').addClass('animated shake');
    $('#iFrame').addClass('animated zoomIn');

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