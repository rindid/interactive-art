let beadsCurtains = [];

function setup() {
  let cnv = createCanvas(displayWidth/2, displayHeight*(0.888));
  cnv.center('horizontal');
}

function draw() {
  background(220);
  for(var x=50; x<width; x+=50){
    beadsCurtains.push(new beadsCurtain(x));
  }
  for (let nowBeads of beadsCurtains){
    nowBeads.display();
  }
}

function beadsCurtain(posX) {
  this.posX = posX;
  this.posY = height/2;
  this.size = 3;
  this.interval = 3;

  /*this.update = function() {
    ;
  };*/

  this.display = function() {
    var posY=0;
    var y=0;
    for(y=0;  y < (height-200)/40; y+=1){
      posY=y*40;
      noStroke();
      fill('rgba(7,137,220,1.0)');
      if(y%3==0){
        ellipse(this.posX, posY+this.size/2, this.size);
        posY=posY+this.size;
      }
      else if(y%3==1){
        ellipse(this.posX, posY+(this.size+1)/2, this.size+1);
        posY=posY+this.size+1;
      }
      else if(y%3==2){
        ellipse(this.posX, posY+(this.size+2)/2, this.size+2);
        posY=posY+this.size+2;
      }
      stroke(0);
      line(this.posX, posY+this.interval, this.posX, (y+1)*40-this.interval);
    }
    noStroke();
    ellipse(this.posX, y*40+(this.size+5)/2, this.size+5);
  };
}