function sketch1(p) {
  p.setup = () => {
    const container = document.querySelector('.case2');
    const { width, height } = container.getBoundingClientRect();
    const canvas = document.getElementById('canvasCase2');
    p.createCanvas(width, height, canvas);
  };

  p.draw = () => {
    p.background(135, 206, 235);
    p.square(100, 100, 50);
  };

  // p.draw = function () {
  //   p.background(135, 206, 235);
  //   p.square(100, 100, 50);
  // };

  p.windowResized = () => {
    const container = document.querySelector('.case2');
    const width = container.getBoundingClientRect().width;
    const height = container.getBoundingClientRect().height;
    p.resizeCanvas(width, height);
  };
}

function sketch2(p) {
  p.setup = () => {
    const container = document.querySelector('.case3');
    const { width, height } = container.getBoundingClientRect();
    const canvas = document.getElementById('canvasCase3');
    p.createCanvas(width, height, canvas);
  };

  p.draw = () => {
    p.background(0, 0, 235);
    p.circle(200, 200, 100);
  };

  p.windowResized = () => {
    const container = document.querySelector('.case3');
    const width = container.getBoundingClientRect().width;
    const height = container.getBoundingClientRect().height;
    p.resizeCanvas(width, height);
  };
}

document.addEventListener('DOMContentLoaded', () => {
  new p5(sketch1);
  new p5(sketch2);
});
