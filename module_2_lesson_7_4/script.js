function setup() {
  const container = document.querySelector('.case2');
  const { width, height } = container.getBoundingClientRect();
  const canvas = document.getElementById('canvasCase2');
  createCanvas(width, height, canvas);
}

function draw() {
  background(135, 206, 235);
  square(1000, 500, 50);
}

function windowResized() {
  const container = document.querySelector('.case2');
  const { width, height } = container.getBoundingClientRect();
  resizeCanvas(width, height);
}
