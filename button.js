
var audio = new Audio('metro.mp3');
audio.play();
var contextClass = (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext);
var dance = document.getElementById("everybodydance");
if (contextClass) {
  var context = new contextClass();
} else {
  onError;
}
var request = new XMLHttpRequest();
request.open('GET', "http://www.googledrive.com/host/f0B8VBe5RstGJIMnhzWkhKZmVlejA", true);
request.responseType = 'arraybuffer';
request.onload = function() {
 context.decodeAudioData(request.response, function(theBuffer) {
  buffer = theBuffer;
  }, onError);
}
request.send();

function onError() { console.log("Bad browser! No Web Audio API for you"); }

function unpress() { dance.classList.remove("pressed"); }

function playSound() {
 dance.classList.add("pressed");
  var source = context.createBufferSource();
  source.buffer = buffer;
 source.connect(context.destination);
  source.start(0);
  var delay = 2000;
  setTimeout(unpress,delay);
}
dance.addEventListener('click', function(event) { playSound(); });

function onclick() { console.log("Test");
  var approved = $.backstretch(gifs[Math.floor(Math.random() * gifs.length)]); == 6;
  var gifs = [
    "http://i.giphy.com/12MgUpnxEq3ypy.gif",
    "http://i.giphy.com/l0O9yF8Mto1mdnogE.gif",
    "http://i.giphy.com/l41m4yUAia33XkNwc.gif",
    "http://i.giphy.com/LhSahsTMJio2A.gif",
    "http://i.giphy.com/xIytx7kHpq74c.gif",
    "http://i.giphy.com/NXWYyKAHim63u.gif",
    "img/approve.gif"
]
  $.backstretch(gifs[Math.floor(Math.random() * gifs.length)]);
}

$(document).ready(function(){
  $("#everybodydance").click(onclick);
})
