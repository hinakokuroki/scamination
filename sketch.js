function setup() {
  window.addEventListener(
    "touchstart",
    function (e) {
      e.preventDefault();
    },
    { passive: false }
  );
  window.addEventListener(
    "touchmove",
    function (e) {
      e.preventDefault();
    },
    {
      passive: false,
    }
  );
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  stroke(255, 0, 0);
  text(windowWidth + "," + windowHeight, 50, 50);
  if (mouseIsPressed) {
    fill(255);
    ellipse(mouseX, mouseY, 50, 50);
    text(windowWidth + "," + windowHeight, mouseX, mouseY - 50);
  }
}
