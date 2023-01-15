function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if(mouseIsPressed){
    fill(255);
    ellipse(mouseX, mouseY, 50,50);
  }
}