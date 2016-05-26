$(function() {

  $(document).ready(init);

  function init() {
    if($(window).width() > 900){
      fullscreen();
    }
    
    liveCount();

    $(window).resize(function(){
      if($(window).width() > 900){
        fullscreen();
      }
    });
  }

  function fullscreen(){
    $('#heroimage').css({
      width: $(window).width(),
      height: $(window).height()
    });
  }

  function liveCount(){
    var xhr = new XMLHttpRequest()
      xhr.open('GET', 'http://davidmattia.xyz/getFalconViewCount/')
      xhr.onload = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            document.getElementById("liveViewersLine").innerHTML = "Live Viewer Count: " + "<strong>" + xhr.responseText + "</strong>";
            console.log(xhr.responseText);
          } else {
            document.getElementById("liveViewersLine").innerHTML = ""
            console.error(xhr.statusText);
          }
        }
      };
      xhr.onerror = function (e) {
      document.getElementById("liveViewersLine").innerHTML = ""
      console.error(xhr.statusText);
      };
      xhr.send(null);
  }

});
