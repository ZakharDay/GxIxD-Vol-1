const canvas = {
  width: 600,
  height: 400,
};

const circleFigure = {
  x: 0,
  y: 0,
  r: 100,
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
  createCanvas(canvas.width, canvas.height);
  // frameRate(1);
}

function draw() {
  circleFigure.x++;
  circleFigure.y++;

  const d = circleFigure.r / 2;

  background(135, 206, 235);
  circle(circleFigure.x + d, circleFigure.y + d, circleFigure.r);
}
