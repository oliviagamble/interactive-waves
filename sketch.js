let angleX = 60;
let angleY = 0;
 
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(30);
  
  let strokeWeightValue = map(mouseX, 0, width, 1, 5);
  
  rotateX(angleX);
  rotateY(angleY);
  
  noFill();
  stroke(255);
  
  for (var i = 0; i < 50; i++) {
  var r = map(sin(frameCount / 2), -1, 1, 100, 200);
  var g = map(i, 0, 50, 100, 200);
  var b = map(cos(frameCount), -1, 1, 200, 100);
  
    stroke(r, g, b);
    strokeWeight(strokeWeightValue);
    
    
    rotate(frameCount / 20);
    
    beginShape();
    for (var j = 0; j < 360; j += 60){
      var rad = i * 3;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var z = sin(frameCount * 2 + i * 5)* 50;
      
      vertex(x, y, z);
    }
    
    endShape(CLOSE);
  }
}

function mouseDragged(){
  angleX += (pmouseY - mouseY) * 0.5;
  angleY += (pmouseX - mouseX) * 0.5;
}



