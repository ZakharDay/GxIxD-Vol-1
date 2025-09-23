//
// UTILITIES
//

function isEven(n) {
  return n % 2 == 0;
}

function isOdd(n) {
  return Math.abs(n % 2) == 1;
}

//
// UTILITIES END
//

const canvasSize = { width: 600, height: 400 };
const squares = { columns: 12, rows: 8 };

const squareDefaultSize = {
  width: canvasSize.width / squares.columns,
  height: canvasSize.height / squares.rows,
};

function sketch(p) {
  p.setup = () => {
    const canvas = document.getElementById('sketch');
    p.createCanvas(canvasSize.width, canvasSize.height, canvas);
  };

  p.draw = () => {
    p.background(0, 0, 0);
    p.noStroke();

    for (let column = 0; column < squares.columns; column++) {
      for (let row = 0; row < squares.rows; row++) {
        if (isEven(row)) {
          if (isEven(column)) {
            p.fill(200);
          } else if (isOdd(column)) {
            p.fill(255);
          }
        } else if (isOdd(row)) {
          if (isEven(column)) {
            p.fill(255);
          } else if (isOdd(column)) {
            p.fill(200);
          }
        }

        const x = column * squareDefaultSize.width;
        const y = row * squareDefaultSize.height;
        const w = squareDefaultSize.width;
        const h = squareDefaultSize.height;

        p.rect(x, y, w, h);
      }
    }
  };
}

document.addEventListener('DOMContentLoaded', () => {
  new p5(sketch);
});
