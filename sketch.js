'use strict'

window.addEventListener('load', setup);

const FRAME_RATE = 30;
var body = document.body;
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');

function setup(){
  canvas.width = 600;
  canvas.height = 600;
  body.appendChild(canvas);

  window.setTimeout(100, draw);
}

function draw(){
  context.clearRect(0, 0, canvas.width, canvas.height);

  window.setTimeout(1000/FRAME_RATE, draw);
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
class Player{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  run(){
    this.update();
    this.render();
  }
  update(){
  }
  render(){
    context.fillStyle = 'blue';
    context.fillRect(this.x, this.y, 50, 50);
  }
}
