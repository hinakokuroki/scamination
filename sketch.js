function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (mouseIsPressed) {
    fill(255);
    ellipse(mouseX, mouseY, 50, 50);
  }
}
