const canvasSize = {
  width: 600,
  height: 400,
};

let clear = false;

function sketch(p) {
  p.setup = () => {
    const canvas = document.getElementById('sketch');
    p.createCanvas(canvasSize.width, canvasSize.height, canvas);
    p.background(0, 0, 0);
    p.noStroke();
    p.fill(0, 0, 255);
  };

  p.draw = () => {
    if (clear) {
      p.background(0, 0, 0);
      clear = false;
    }
  };

  p.mouseMoved = () => {
    // console.log(p.mouseX, p.mouseY)
    p.circle(p.mouseX, p.mouseY, 10);
  };
}

function initButton() {
  const button = document.querySelector('.clearButton');

  button.addEventListener('click', () => {
    clear = true;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  new p5(sketch);
  initButton();
});
