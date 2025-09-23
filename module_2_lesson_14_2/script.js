//
// UTILITIES
//

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function isEven(n) {
  return n % 2 == 0;
}

function isOdd(n) {
  return Math.abs(n % 2) == 1;
}

//
// UTILITIES END
//

const canvasSize = {
  width: 600,
  height: 400,
};

const squareSettings = {
  columns: 12,
  rows: 8,
  width: canvasSize.width / 12,
  height: canvasSize.height / 8,
};

const squares = [];

function createSquares() {
  let c;

  for (let column = 0; column < squareSettings.columns; column++) {
    for (let row = 0; row < squareSettings.rows; row++) {
      if (isEven(row)) {
        if (isEven(column)) {
          c = 200; // p.fill(200);
        } else if (isOdd(column)) {
          c = 255; // p.fill(255);
        }
      } else if (isOdd(row)) {
        if (isEven(column)) {
          c = 255; // p.fill(255);
        } else if (isOdd(column)) {
          c = 200; // p.fill(200);
        }
      }

      const x = column * squareSettings.width;
      const y = row * squareSettings.height;
      const w = squareSettings.width;
      const h = squareSettings.height;

      // prettier-ignore
      squares.push({ x, y, w, h, c });
    }
  }
}

function sketch(p) {
  p.setup = () => {
    const canvas = document.getElementById('sketch');
    p.createCanvas(canvasSize.width, canvasSize.height, canvas);
  };

  p.draw = () => {
    p.background(0, 0, 0);
    p.noStroke();

    squares.forEach((square) => {
      const { x, y, w, h, c } = square;

      p.fill(c);
      p.rect(x, y, w, h);
    });
  };

  p.mouseMoved = () => {
    console.log(p.mouseX, p.mouseY);
  };
}

document.addEventListener('DOMContentLoaded', () => {
  createSquares();
  new p5(sketch);
});
