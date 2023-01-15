let slitY;

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
  slitY = windowHeight - 40;
}

function draw() {
  background(250);
  stroke(100);
  text(windowWidth + "," + windowHeight, 50, 50);
  rect(20, slitY, windowWidth - 40, windowHeight);
  if (mouseIsPressed) {
    slitY = slitY + calcSlitY();
    fill(255);
    ellipse(mouseX, mouseY, 50, 50);
    text(windowWidth + "," + windowHeight, mouseX, mouseY - 50);
  }
}

function calcSlitY() {
  let startY, moveY;
  if (mouseIsPressed && count == 0) {
    startY = mouseY;
  } else if (mouseIsPressed) {
    moveY = mouseY - startY;
  }
  return moveY;
}
