let slitX, startX, moveX;
let slitY, startY, moveY;
let drgStart;

let imgWidth, imgHeight;
let color;
let imgList = [];
let img;
let imgCount;

function preload() {
  img0 = loadImage("./image_1.png");
  img1 = loadImage("./image_2.png");
  img2 = loadImage("./image_3.png");
  img3 = loadImage("./image_4.png");
  img4 = loadImage("./image_5.png");
  img5 = loadImage("./image_6.png");
  img6 = loadImage("./image_7.png");
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
  // buttonList = [];
  // for (let i = 0; i < 7; i++) {
  //   let button = createButton(str(i + 1));
  //   button.position(width - 50, i * 85 + 10);
  //   button.mousePressed(() => {
  //     img = imgList[i];
  //   });
  //   buttonList.push(button);
  // }

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
  slitX = width / 2 - 5;
  slitY = height / 2 - 4;
  slitAngle = 0;
  startY = 0;
  moveY = 0;
  startX = 0;
  moveX = 0;
  drgStart = false;

  color = img1.get(0, 0);
  imgList = [img0, img1, img2, img3, img4, img5, img6];
  imgCount = 0;
  img = imgList[imgCount % 7];
}

function draw() {
  background(255);
  tint(255, 255);
  fillAround();
  image(img, width / 2, height / 2, imgWidth, imgHeight);
  drawSlit(slitX, slitY, slitAngle);
  drawUI();

  if (mouseIsPressed) {
    push();
    fill(255, 100);
    noStroke();
    circle(mouseX, mouseY, 40);
    pop();
  }
}

function drawSlit(x, y, angle) {
  //tint(255, 255, 200, 240);
  image(img, x, y, imgWidth, imgHeight);
}

function mousePressed() {
  startY = mouseY;
  drgStart = true;

  if ((mouseX - width / 2) ** 2 + (mouseY - 60) ** 2 <= 25 ** 2) {
    changeScene1();
  } else if (
    (mouseX - width / 2) ** 2 + (mouseY - height + 60) ** 2 <=
    25 ** 2
  ) {
    changeScene2();
  }
}
function mouseDragged() {
  if (drgStart) {
    slitY = slitY + (mouseY - pmouseY) / 3;
    slitX = slitX + (mouseX - pmouseX) / 3;
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

function changeScene1() {
  imgCount--;
  if (imgCount < 0) {
    imgCount = 6;
  }
  img = imgList[imgCount];
}
function changeScene2() {
  imgCount++;
  if (imgCount >= 7) {
    imgCount = 0;
  }
  img = imgList[imgCount];
}

function drawUI() {
  push();
  fill(255, 100);
  circle(width / 2, 60, 50);
  triangle(width / 2, 48, width / 2 - 10, 68, width / 2 + 10, 68);
  circle(width / 2, height - 60, 50);
  triangle(
    width / 2,
    height - 48,
    width / 2 - 10,
    height - 68,
    width / 2 + 10,
    height - 68
  );
  pop();
}
