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
/*
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
  };*/
  this.display = function() {
    
  }
  draw_curve_line(posX, height / 4);
}

function draw_curve_line(posX, posY)
{
  let p1 = { x: 0, y: 0 };
  let p2 = { x: 0, y: 600 };
  //p1은 고정점
  //p2는 움직이는 끝 점
  let p3 = { x: 600, y: 600 };
  let p4 = { x: 0, y: 500 };

  let p6 = { x: 0, y: 200 };
  let p5 = { x: 0, y: 400 };
  translate(posX, posY);
  stroke(120, 102, 155);
  let t = map(mouseX, 0, width, -5, 5);
  var count = 2;
  var angle = (millis()/1000)%count;
  if (angle > count/2)
    angle = count - angle;
  var biangle =  angle - count/4;
  noFill();

  bezier(p1.x, p1.y, p1.x, p1.y, p4.x, p4.y, p2.x+biangle*50, p2.y);
  /*let steps =8;
  for(let i=0; i<= steps; i++){
    let t = 0.5;
    let x = bezierPoint(p1.x, p1.x, p4.x, p2.x+biangle*50 , t);
    let y = bezierPoint(p1.y, p1.y, p4.y, p2.y ,t);
    ellipse(x, y, 10);
  }*/
  let d = {x: p2.x+biangle*50, y: p2.y};
  let depth = 3;
  draw_point(p1, p1, p4, d, depth);
  //ellipse(p1.x, p1.y, 10);
  //ellipse(d.x, d.y, 10);

  translate(-posX, -posY);
}

function draw_point(a, b, c, d, depth)
{//De Casteljau's algorithm
  let e = point_half(a,b);
  let f = point_half(b,c);
  let g = point_half(c,d);
  let h = point_half(e,f);
  let j = point_half(f,g);
  let k = point_half(h,j);
  ellipse(k.x, k.y, 10);
  if(depth > 1)
  {
      draw_point(a, e, h, k, depth-1);
      draw_point(k, j, g, d, depth-1);
  }
}

function point_half(p1, p2)
{
  let ret = {x: (p1.x+p2.x)/2, y: (p1.y+p2.y)/2}
  return ret;
}