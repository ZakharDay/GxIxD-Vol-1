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

let squares = [];

function createSquares() {
  squares = [];

  for (let row = 0; row < cycleLimit; row++) {
    for (let column = 0; column < cycleLimit; column++) {
      //
      // VERSION 1
      //

      // const square = {};

      // square.x = row * squareSize;
      // square.y = column * squareSize;

      // square.color = {
      //   r: getRandomInt(0, 50),
      //   g: getRandomInt(200, 255),
      //   b: getRandomInt(0, 50),
      // };

      // square.figure = squareFigures.sample();

      //
      // VERSION 1 END
      //

      //
      // VERSION 2
      //

      // const square = {
      //   x: row * squareSize,
      //   y: column * squareSize,
      //   color: {
      //     r: getRandomInt(0, 50),
      //     g: getRandomInt(200, 255),
      //     b: getRandomInt(0, 50),
      //   },
      //   figure: squareFigures.sample(),
      // };

      // squares.push(square);

      //
      // VERSION 2 END
      //

      //
      // VERSION 3
      //

      squares.push({
        x: row * squareSize,
        y: column * squareSize,
        color: {
          r: getRandomInt(0, 50),
          g: getRandomInt(200, 255),
          b: getRandomInt(0, 50),
        },
        figure: squareFigures.sample(),
        state: 'initial',
      });

      //
      // VERSION 3 END
      //
    }
  }
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
    p.frameRate(4);
    p.noStroke();
  };

  p.draw = () => {
    if (state == 'enabled') {
      createSquares();
    }

    drawSquares(p);
  };

  p.mousePressed = () => {
    p.frameRate(60);

    state = 'disabled';
    activateSquare(p);
  };

  p.mouseDragged = () => {
    if (state == 'disabled') {
      activateSquare(p);
    }
  };

  p.mouseReleased = () => {
    p.frameRate(4);

    state = 'enabled';

    squares.forEach((square) => {
      square.state = 'initial';
    });
  };
}

document.addEventListener('DOMContentLoaded', () => {
  new p5(sketch1);
});
