let beadsCurtains = [];

function setup() {
  createCanvas(windowWidth, windowHeight*(0.996));
}

function draw() {
  background(220);
  beadsCurtains.push(new beadsCurtain(200));
  for (let nowBeads of beadsCurtains){
    nowBeads.display();
  }
}

function beadsCurtain(posX) {
  this.posX = posX;
  this.posY = height/2;
  this.size = 3;

  /*this.update = function() {
    ;
  };*/

  this.display = function() {
    for(var y= 0;  y < height; y+=40)
      ellipse(this.posX, y, this.size);
  };
}