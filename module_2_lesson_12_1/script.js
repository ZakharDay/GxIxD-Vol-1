//
// UTILITIES
//

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//
// UTILITIES END
//

const canvasSize = 600;
const squareSize = 20;
const cycleLimit = canvasSize / squareSize;

let shiftCoef = 0;

function initUi() {
  const shiftInput = document.getElementById('shift');

  shiftInput.addEventListener('input', () => {
    shiftCoef = parseInt(shiftInput.value);
  });
}

function sketch(p) {
  p.setup = () => {
    const canvas = document.querySelector('.sketch');
    p.createCanvas(canvasSize, canvasSize, canvas);
    p.frameRate(12);
  };

  p.draw = () => {
    p.background(0, 0, 0);
    p.stroke(0, 255, 0);
    p.noFill();

    for (let row = 0; row < cycleLimit; row++) {
      const squareY = row * squareSize;
      const y = squareY + squareSize / 2;

      for (let column = 0; column < cycleLimit; column++) {
        const squareX = column * squareSize;
        const x = squareX + squareSize;

        let shift = 0;

        if (shiftCoef != 0) {
          shift = getRandomInt(-shiftCoef, shiftCoef + 1);
        }

        const shifterdY = y + shift;

        if (column === 0) {
          p.beginShape();
          p.vertex(squareX, shifterdY);
        } else {
          p.bezierVertex(x, shifterdY, x, shifterdY, x, shifterdY);
        }

        if (column === cycleLimit - 1) {
          p.endShape();
        }
      }
    }
  };
}

document.addEventListener('DOMContentLoaded', () => {
  new p5(sketch);
  initUi();
});
