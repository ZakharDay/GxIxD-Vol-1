//
// UTILITIES
//

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//
// UTILITIES END
//

const canvasSize = 600;
const squareSize = 10;
const cycleLimit = canvasSize / squareSize;

let shiftCoef = 0;
let isEntropyOn = false;
let color;

function initUi() {
  const shiftInput = document.getElementById('shift');

  shiftInput.addEventListener('input', () => {
    shiftCoef = parseInt(shiftInput.value);
  });

  const entropyButton = document.getElementById('entropy');

  entropyButton.addEventListener('click', () => {
    entropyButton.classList.toggle('active');

    if (isEntropyOn) {
      isEntropyOn = false;
    } else {
      isEntropyOn = true;
    }
  });

  const colorSelectPlaceholder = document.querySelector('.placeholder');
  const colorSelectOptions = document.querySelectorAll('.option');

  colorSelectOptions.forEach((option) => {
    option.addEventListener('click', () => {
      colorSelectPlaceholder.innerText = option.innerText;
      color = option.innerText.toLowerCase();

      colorSelectOptions.forEach((o) => {
        o.classList.remove('active');
      });

      option.classList.add('active');
    });
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
    p.noFill();

    switch (color) {
      case 'red':
        p.stroke(255, 0, 0);
        break;

      case 'green':
        p.stroke(0, 255, 0);
        break;

      case 'blue':
        p.stroke(0, 0, 255);
        break;

      default:
        p.stroke(255, 255, 255);
        break;
    }

    for (let row = 0; row < cycleLimit; row++) {
      const squareY = row * squareSize;
      const y = squareY + squareSize / 2;

      for (let column = 0; column < cycleLimit; column++) {
        const squareX = column * squareSize;
        const x = squareX + squareSize;

        let shift = 0;

        if (shiftCoef != 0) {
          if (isEntropyOn) {
            const vertexEntropy = (row + column) / 10;

            shift = getRandomArbitrary(
              -shiftCoef / 10 - vertexEntropy,
              shiftCoef / 10 + 1 + vertexEntropy
            );
          } else {
            shift = getRandomArbitrary(-shiftCoef / 10, shiftCoef / 10 + 1);
          }
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
