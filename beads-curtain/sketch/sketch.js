let beadsCurtains = [];
let points = [];

function setup() {
  let cnv = createCanvas(displayWidth/2, displayHeight*(0.888), WEBGL);
  cnv.center('horizontal');
}

function draw() {
  background(220);
  translate(-width/2, -height/2,0);
  for(var x=50; x+30<width; x+=50){
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
  draw_curve_line(posX, 0);
}

function draw_curve_line(posX, posY)
{
  points = [];
  let p1 = { x: 0, y: 0 };
  let p2 = { x: 0, y: 800 };
  //p1은 고정점
  //p2는 움직이는 끝 점
  let p4 = { x: 0, y: 700 };
  translate(posX, posY);
  stroke(120, 102, 155);
  let t = map(mouseX, 0, width, -5, 5);
  var count = 2;
  var angle = (millis()/1000)%count;
  if (angle > count/2)
    angle = count - angle;
  var biangle =  angle - count/4;
  noFill();

  //bezier(p1.x, p1.y, p1.x, p1.y, p4.x, p4.y, p2.x+biangle*50, p2.y);
  let d = {x: p2.x+biangle*50, y: p2.y};
  let depth = 3;
  stack_point(p1, p1, p4, d, depth);
  points.sort((a,b)=>a.y-b.y);
  var padding =15;
  strokeCap(SQUARE);
  for (var i=0; i<points.length-1; i++){
    strokeWeight(3);
    line(points[i].x, points[i].y+padding, points[i+1].x, points[i+1].y-padding);
    strokeWeight(1);
    if(i!=0)
      draw_shape(points[i].x, points[i].y, 20, 10, biangle, i);
    //ellipse(points[i].x, points[i].y, 3);
    //textSize(20);
    //text(biangle, points[i].x, points[i].y);
  }
  //last beads
  draw_shape(points[points.length-1].x, points[points.length-1].y+15, 30, 10, biangle, points.length-1);
  
  translate(-posX, -posY);
}

function stack_point(a, b, c, d, depth)
{//De Casteljau's algorithm
  let e = point_half(a,b);
  let f = point_half(b,c);
  let g = point_half(c,d);
  let h = point_half(e,f);
  let j = point_half(f,g);
  let k = point_half(h,j);
  //ellipse(k.x, k.y, 10);
  points.push(k);
  if(depth > 1)
  {
    stack_point(a, e, h, k, depth-1);
    stack_point(k, j, g, d, depth-1);
  }
}

function point_half(p1, p2)
{
  let ret = {x: (p1.x+p2.x)/2, y: (p1.y+p2.y)/2}
  return ret;
}

function draw_shape(posX, posY, dia, dia_h, angle, num)
{
  push();
  noStroke();
  fill('rgba(0, 255, 255, 0.25)');
  //translate(width/2, height/2,0);
  //translate(-width/2, -height/2,0);
  translate(posX, posY, 0);
  angleMode(DEGREES);
  rotateX(90);
  rotateZ(angle*10*num);
  
  cylinder(dia, dia_h);
  translate(-posX, -posY, 0);
  pop();
}