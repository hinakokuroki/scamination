let slitX, startX, moveX;
let slitY, startY, moveY;
let drgStart;

let imgWidth, imgHeight;

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
  background(250);
  //image(img1, width / 2, height / 2, imgWidth, imgHeight);
  //image(img1, width / 2, height / 2);
  slitX = width / 2 - 10;
  slitY = height / 2 - 10;
  slitAngle = 0;
  startY = 0;
  moveY = 0;
  startX = 0;
  moveX = 0;
  drgStart = false;
}

function draw() {
  let dragCount = 0;
  background(255);
  image(img1, width / 2, height / 2, imgWidth, imgHeight);
  text(windowWidth + "," + windowHeight, 50, 50);
  //slitY = slitY + moveY;
  //rect(20, slitY, windowWidth - 40, windowHeight);
  drawSlit(slitX, slitY, slitAngle);
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

function drawSlit(x, y, angle) {
  image(img1, x, y, imgWidth, imgHeight);
}
