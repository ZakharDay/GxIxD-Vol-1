function setup() {
  const container1 = document.querySelector('.case2');
  const width1 = container1.getBoundingClientRect().width;
  const height1 = container1.getBoundingClientRect().height;
  const canvas1 = document.getElementById('canvasCase2');
  createCanvas(width1, height1, canvas1);

  const container2 = document.querySelector('.case3');
  const width2 = container2.getBoundingClientRect().width;
  const height2 = container2.getBoundingClientRect().height;
  const canvas2 = document.getElementById('canvasCase3');
  createCanvas(width2, height2, canvas2);
}

function draw() {
  background(135, 206, 235);
  square(100, 100, 50);
}

function windowResized() {
  const container1 = document.querySelector('.case2');
  const width1 = container1.getBoundingClientRect().width;
  const height1 = container1.getBoundingClientRect().height;
  resizeCanvas(width1, height1);

  const container2 = document.querySelector('.case3');
  const width2 = container2.getBoundingClientRect().width;
  const height2 = container2.getBoundingClientRect().height;
  resizeCanvas(width2, height2);
}
