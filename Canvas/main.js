var c = document.querySelector("#c")

c.width = 1920;
c.height = 1080;
var x = c.getContext("2d");

var Interval = setInterval(draw, 1000/60)

var S = Math.sin;
var C = Math.cos;
var T = Math.tan;
function R(r,g,b,a) 
{
  a = a === undefined ? 1 : a;
  return "rgba("+(r|0)+","+(g|0)+","+(b|0)+","+a+")"
}

var Time = 0
function draw()
{
    u(Time)
    Time += 1 / 60
}
function reload()
{
    clearInterval(Interval)
    c.height = 1080
    Interval = setInterval(draw, 1000/60)
}

function u(t)
{
    c.height = 1080
    x.strokeStyle="white"
    x.beginPath()
    x.moveTo(0, S(t*5) * -50 + 535)
    for(i=0;i<1920;i++)
    {
        // Rainbow BG
        x.fillStyle=`hsl(${i/15+t*100},100%,60%`
        x.fillRect(i,S(t*5+i/300) * -50 + 540,1,S(t*5+i/300) * 50 + 540)
        // Sine wave
        x.lineTo(i, S(t*5+i/300) * -50 + 535)
    }
    x.lineWidth = 10
    x.stroke()

    x.fillStyle=R()
    x.font='300px a';
    x.fillText('🐱',750,S(t*2)*20+630);
}

reload()

$('#container').on('click', function(){
    // if already full screen; exit
    // else go fullscreen
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    ) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      element = $('#container').get(0);
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
  });