let slitX, startX, moveX;
let slitY, startY, moveY;
let drgStart;

let imgWidth, imgHeight;
let color;

function preload() {
  img1 = loadImage("./image_1.png");
}

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

  noStroke();
  imageMode(CENTER);
  //imageサイズ調整
  if (width / height <= img1.width / img1.height) {
    imgWidth = width - 10;
    imgHeight = Math.floor((img1.height * imgWidth) / img1.width);
  } else {
    imgHeight = height - 10;
    imgWidth = Math.floor((img1.width * imgHeight) / img1.height);
  }
  slitX = width / 2 - 10;
  slitY = height / 2 - 10;
  slitAngle = 0;
  startY = 0;
  moveY = 0;
  startX = 0;
  moveX = 0;
  drgStart = false;

  color = img1.get(0, 0);
}

function draw() {
  background(255);
  tint(255, 255);
  fillAround();
  image(img1, width / 2, height / 2, imgWidth, imgHeight);
  drawSlit(slitX, slitY, slitAngle);
}

function drawSlit(x, y, angle) {
  tint(255, 255, 80, 240);
  image(img1, x, y, imgWidth, imgHeight);
}

function mousePressed() {
  startY = mouseY;
  drgStart = true;
}
function mouseDragged() {
  if (drgStart) {
    slitY = slitY + mouseY - pmouseY;
    slitX = slitX + mouseX - pmouseX;
  }
}
function mouseReleased() {
  drgStart = false;
}

function fillAround() {
  fill(color);
  rect(0, 0, 20, 20);
  rect(0, 0, (width - imgWidth) / 2 + 4, height);
  rect(
    width - (width - imgWidth) / 2 - 4,
    0,
    (width - imgWidth) / 2 + 4,
    height
  );
  rect(0, 0, width, (height - imgHeight) / 2 + 4);
  rect(
    0,
    height - (height - imgHeight) / 2 - 4,
    width,
    (height - imgHeight) / 2 + 4
  );
}
