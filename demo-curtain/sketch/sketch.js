let beadsCurtains = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  beadsCurtains.push(new beadsCurtain());
  for (let nowBeads of beadsCurtains){
    nowBeads.display();
  }
}

function beadsCurtain() {
  this.posX = 200;
  this.posY = 10;
  this.size = 3;

  this.update = function() {
    ;
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}