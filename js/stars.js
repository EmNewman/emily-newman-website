var canvas = document.getElementById("stars");
var ctx = canvas.getContext("2d")
ctx.canvas.width = screen.width;
ctx.canvas.height = 400;

var width_lower = 0;
var width_upper = screen.width;
var height_lower = 0;
var height_upper = ctx.canvas.height;
var max_rad = 5;
var colors = ['white', 'white', 'white', 'white','white', 'cyan', 'red', 'magenta']

var random_rad=0;
var randomx=0;
var randomy=0;
var random_radius;
for (var i=0; i<300; i++) {
  randomx = width_upper*Math.random();
  randomy = height_upper*Math.random();
  random_rad = max_rad*Math.random();
  ctx.beginPath();
  ctx.arc(randomx, randomy, random_rad, 0, 2*Math.PI, false);
  ctx.fillStyle = colors[Math.floor(Math.random()*7)];
  ctx.fill();
  ctx.closePath();
}