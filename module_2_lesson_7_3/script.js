function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(135, 206, 235);
  square(1000, 500, 50);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
