function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(135, 206, 235);

  noStroke();

  fill('pink');

  circle(20, 20, 20);

  fill('green');

  circle(100, 100, 40);

  circle(200, 200, 40);

  fill('orange');

  stroke(color(0, 0, 255));
  strokeWeight(4);

  circle(300, 300, 40);

  fill('white');

  square(350, 350, 40);

  noFill();

  square(150, 150, 40);
}
