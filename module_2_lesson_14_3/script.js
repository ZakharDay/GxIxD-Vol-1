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

const canvasSize = {
  width: 600,
  height: 400,
};

const squareSettings = {
  columns: 12,
  rows: 8,
  width: canvasSize.width / 12,
  height: canvasSize.height / 8,
  maxWidth: (canvasSize.width / 12) * 3,
  maxHeight: (canvasSize.height / 8) * 3,
};

const squares = [];
let activeSquare;

function createSquares() {
  let color, colorDefault;

  for (let column = 0; column < squareSettings.columns; column++) {
    for (let row = 0; row < squareSettings.rows; row++) {
      if (isEven(row)) {
        if (isEven(column)) {
          colorDefault = 200;
        } else if (isOdd(column)) {
          colorDefault = 255;
        }
      } else if (isOdd(row)) {
        if (isEven(column)) {
          colorDefault = 255;
        } else if (isOdd(column)) {
          colorDefault = 200;
        }
      }

      const x = column * squareSettings.width;
      const y = row * squareSettings.height;
      const w = squareSettings.width;
      const h = squareSettings.height;

      const xDefault = column * squareSettings.width;
      const yDefault = row * squareSettings.height;

      const state = 'inactive';

      color = colorDefault;

      squares.push({
        column,
        row,
        x,
        y,
        w,
        h,
        xDefault,
        yDefault,
        color,
        colorDefault,
        state,
      });
    }
  }
}

function markActiveSquare(p) {
  squares.forEach((square) => {
    if (
      p.mouseX >= square.xDefault &&
      p.mouseX < square.xDefault + squareSettings.width &&
      p.mouseY >= square.yDefault &&
      p.mouseY < square.yDefault + squareSettings.height
    ) {
      square.color = p.color(0, 0, 255);
      square.state = 'active';
    } else {
      square.color = square.colorDefault;
      square.state = 'inactive';
    }
  });
}

function updateSquares(p) {
  squares.forEach((square) => {
    if (square.state == 'active') {
      recalcActiveSquare(square, p);
    } else {
      recalcInactiveSquare(square);
    }
  });
}

function recalcActiveSquare(square, p) {
  square.x =
    square.xDefault - (squareSettings.maxWidth - squareSettings.width) / 2;

  square.y =
    square.yDefault - (squareSettings.maxHeight - squareSettings.height) / 2;

  square.w = squareSettings.maxWidth;
  square.h = squareSettings.maxHeight;
}

function recalcInactiveSquare(square) {
  squares.forEach((s) => {
    if (s.state == 'active') {
      activeSquare = s;
    }
  });

  const totalSpaceLeft = activeSquare.x;
  const totalSpaceRight = canvasSize.width - (activeSquare.x + activeSquare.w);
  const totalColumnsRight = squareSettings.columns - activeSquare.column - 1;

  const totalSpaceTop = activeSquare.y;
  const totalSpaceBottom =
    canvasSize.height - (activeSquare.y + activeSquare.h);
  const totalRowsBottom = squareSettings.rows - activeSquare.row - 1;

  if (square.column < activeSquare.column) {
    square.x = square.column * (activeSquare.x / activeSquare.column);
    square.w = totalSpaceLeft / activeSquare.column;
  }

  if (square.row < activeSquare.row) {
    square.y = square.row * (activeSquare.y / activeSquare.row);
    square.h = totalSpaceTop / activeSquare.row;
  }

  if (square.column > activeSquare.column) {
    const colAfterActive = square.column - activeSquare.column - 1;

    square.x =
      activeSquare.x +
      activeSquare.w +
      (totalSpaceRight / totalColumnsRight) * colAfterActive;

    square.w = totalSpaceRight / totalColumnsRight;
  }

  if (square.row > activeSquare.row) {
    const rowAfterActive = square.row - activeSquare.row - 1;

    square.y =
      activeSquare.y +
      activeSquare.h +
      (totalSpaceBottom / totalRowsBottom) * rowAfterActive;

    square.h = totalSpaceBottom / totalRowsBottom;
  }

  if (square.column == activeSquare.column) {
    square.x = activeSquare.x;
    square.w = activeSquare.w;
  }

  if (square.row == activeSquare.row) {
    square.y = activeSquare.y;
    square.h = activeSquare.h;
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
      const { x, y, w, h, color } = square;

      p.fill(color);
      p.rect(x, y, w, h);
    });
  };

  p.mouseMoved = () => {
    console.log(p.mouseX, p.mouseY);
    markActiveSquare(p);
    updateSquares(p);
  };
}

document.addEventListener('DOMContentLoaded', () => {
  createSquares();
  new p5(sketch);
});
