//
// UTILITIES
//

Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//
// UTILITIES END
//

const canvasSize = 300;
const squareSize = 50;
const padding = 10;

const cycleLimit = canvasSize / squareSize;
const squareFigures = ['empty', 'square', 'circle', 'triangle'];
const squareFigureColor = 255;

const frameRateInMils = 1000 / 4;

let timestamp = Date.now();
let squares = [];

function generateSquare(x, y) {
  return {
    color: {
      r: getRandomInt(0, 50),
      g: getRandomInt(200, 255),
      b: getRandomInt(0, 50),
    },
    figure: squareFigures.sample(),
    state: 'initial',
    x,
    y,
  };
}

function createSquares() {
  for (let row = 0; row < cycleLimit; row++) {
    for (let column = 0; column < cycleLimit; column++) {
      const x = row * squareSize;
      const y = column * squareSize;
      squares.push(generateSquare(x, y));
    }
  }
}

function updateSquares() {
  const updatedSquares = [];

  squares.forEach((square) => {
    if (square.state == 'initial') {
      const updatedSquare = generateSquare(square.x, square.y);
      updatedSquares.push(updatedSquare);
    } else {
      updatedSquares.push(square);
    }
  });

  squares = updatedSquares;
}

function activateSquare(p) {
  squares.forEach((square) => {
    if (
      p.mouseX >= square.x &&
      p.mouseX < square.x + squareSize &&
      p.mouseY >= square.y &&
      p.mouseY < square.y + squareSize
    ) {
      square.state = 'active';
    }
  });
}

function drawSquares(p) {
  p.background(0, 0, 0);

  squares.forEach((square) => {
    if (square.state == 'initial') {
      p.fill(square.color.r, square.color.g, square.color.b);
    } else {
      p.fill(square.color.g, square.color.r, square.color.b);
    }

    p.square(square.x, square.y, squareSize);

    if (square.figure != 'empty') {
      p.fill(squareFigureColor);

      if (square.figure == 'circle') {
        const d = squareSize - padding * 2;
        p.circle(square.x + padding + d / 2, square.y + padding + d / 2, d);
      }

      if (square.figure == 'square') {
        p.square(
          square.x + padding,
          square.y + padding,
          squareSize - padding * 2
        );
      }

      if (square.figure == 'triangle') {
        p.triangle(
          square.x + squareSize / 2,
          square.y + padding,
          square.x + squareSize - padding,
          square.y + squareSize - padding,
          square.x + padding,
          square.y + squareSize - padding
        );
      }
    }
  });
}

function sketch1(p) {
  let state = 'enabled';

  p.setup = () => {
    const canvas = document.getElementById('case1');
    p.createCanvas(canvasSize, canvasSize, canvas);
    p.noStroke();
  };

  p.draw = () => {
    if (Date.now() > timestamp + frameRateInMils) {
      updateSquares();
      timestamp = Date.now();
    }

    drawSquares(p);
  };

  p.mousePressed = () => {
    state = 'disabled';
    activateSquare(p);
  };

  p.mouseDragged = () => {
    if (state == 'disabled') {
      activateSquare(p);
    }
  };

  p.mouseReleased = () => {
    state = 'enabled';

    squares.forEach((square) => {
      square.state = 'initial';
    });
  };

  p.keyTyped = () => {
    if (p.key === 's') {
      p.saveGif('module_2_lesson_8_3.gif', 10);
    }
  };
}

createSquares();

document.addEventListener('DOMContentLoaded', () => {
  new p5(sketch1);
});
