let slitY, startY, moveY;
let drgStart;

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
  drgStart = false;
}

function draw() {
  let dragCount = 0;
  background(250);
  stroke(100);
  text(windowWidth + "," + windowHeight, 50, 50);
  //slitY = slitY + moveY;
  //rect(20, slitY, windowWidth - 40, windowHeight);
  drawSlit(4, slitY, windowWidth - 8, windowHeight, 36);
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

function drawSlit(x, y, w, h, n) {
  //rect(x, y, w, h);
  slitSize = 12;
  slitInterval = 6;
  n = Math.floor(h / (slitInterval + slitSize)) + 1;
  //slitInterval = h / (n * 2 - 1);
  for (let i = 0; i < n; i++) {
    fill(20, 20, 60);
    rect(x, y + i * (slitInterval + slitSize), w, slitSize);
    //console.log(slitInterval);
  }
}
