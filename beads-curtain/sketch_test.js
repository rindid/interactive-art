function setup() {
  let cnv = createCanvas(displayWidth/2, displayHeight*(0.888));
  cnv.center('horizontal');
}

function draw() {
  let p1 = { x: 0, y: 0 };
  let p2 = { x: 0, y: 600 };
  //p1은 고정점
  //p2는 움직이는 끝 점
  let p3 = { x: 600, y: 600 };
  let p4 = { x: 30, y: 600 };

  let p6 = { x: 0, y: 200 };
  let p5 = { x: 0, y: 400 };
  background(220);
  stroke(255, 102, 0);
  line(width / 2, 0, width / 2, height / 4);

  draw_line(width / 2, height / 4);
  draw_line2(3*width / 4, height / 4);
  /*
  translate(width / 2, height / 4);
  //stroke(0);
  //curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);

  //stroke(7,137,220);
  //line(p1.x, p1.y, p2.x, p2.y);

  stroke(255, 102, 0);
  let t = map(mouseX, 0, width, -5, 5);
  var count = 2;
  var angle = (millis()/1000)%count;
  if (angle > count/2)
    angle = count - angle;
  //curveTightness(t);
  //rotate(-1*angle*PI / 36.0);
  noFill();
  beginShape();
  curveVertex(p1.x, p1.y);
  curveVertex(p1.x, p1.y);
  curveVertex(p6.x+(angle*50)/4, p6.y);
  curveVertex(p5.x+(angle*50)/2, p5.y);
  curveVertex(p2.x+angle*50, p2.y);
  curveVertex(p2.x+angle*50, p2.y);
  endShape();
  //bezier(p1.x, p1.y, p1.x, p1.y, p4.x, p4.y, p2.x, p2.y);
  */
}

function draw_line(posX, posY)
{
  let p1 = { x: 0, y: 0 };
  let p2 = { x: 0, y: 600 };
  //p1은 고정점
  //p2는 움직이는 끝 점
  let p3 = { x: 600, y: 600 };
  let p4 = { x: 30, y: 600 };

  let p6 = { x: 0, y: 200 };
  let p5 = { x: 0, y: 400 };
  translate(posX, posY);
  stroke(255, 102, 0);
  let t = map(mouseX, 0, width, -5, 5);
  var count = 2;
  var angle = (millis()/1000)%count;
  if (angle > count/2)
    angle = count - angle;
  noFill();
  beginShape();
  curveVertex(p1.x, p1.y);
  curveVertex(p1.x, p1.y);
  curveVertex(p6.x+(angle*50)/4, p6.y);
  curveVertex(p5.x+(angle*50)/2, p5.y);
  curveVertex(p2.x+angle*50, p2.y);
  curveVertex(p2.x+angle*50, p2.y);
  endShape();
  translate(-posX, -posY);
}

function draw_line2(posX, posY)
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
  noFill();

  bezier(p1.x, p1.y, p1.x, p1.y, p4.x, p4.y, p2.x+angle*50, p2.y);
  let x = bezierPoint(p1.x, p1.x, p4.x, p2.x+angle*50 , 1);
  let y = bezierPoint(p1.y, p1.y, p4.y, p2.y ,1);
  ellipse(x, y, 10);
  
  translate(-posX, -posY);
}