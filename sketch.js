let slitY, startY, moveY;

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
  startY = 0;
  moveY = 0;
}

function draw() {
  let dragCount = 0;
  background(250);
  stroke(100);
  text(windowWidth + "," + windowHeight, 50, 50);
  //slitY = slitY + moveY;
  rect(20, slitY, windowWidth - 40, windowHeight);

  if (mouseIsPressed) {
    fill(255);
    ellipse(mouseX, mouseY, 50, 50);
    text(windowWidth + "," + windowHeight, mouseX, mouseY - 50);
  }
}

function mousePressed() {
  startY = mouseY;
  if (mouseY >= slitY) {
    drgStart = true;
  }
}
function mouseDragged() {
  if (drgStart) {
    slitY = slitY + mouseY - pmouseY;
  }
}
function mouseReleased() {
  drgStart = false;
}
