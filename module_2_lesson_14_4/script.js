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

//
// EASINGS START
//

function easeInCubic(x) {
  return x * x * x;
}

function easeInOutElastic(x) {
  const c5 = (2 * Math.PI) / 4.5;

  return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
    : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
}

function easeInOutExpo(x) {
  return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? Math.pow(2, 20 * x - 10) / 2
    : (2 - Math.pow(2, -20 * x + 10)) / 2;
}

//
// EASINGS END
//

function easing(x) {
  return easeInCubic(x);
  // return easeInOutElastic(x);
  // return easeInOutExpo(x);
}

const canvasSize = {
  width: 600,
  height: 400,
};

// const squareSettings = {
//   columns: 12,
//   rows: 8,
//   width: canvasSize.width / 12,
//   height: canvasSize.height / 8,
//   minWidth: canvasSize.width / 12 / 5,
//   minHeight: canvasSize.height / 8 / 5,
//   maxWidth: (canvasSize.width / 12) * 3,
//   maxHeight: (canvasSize.height / 8) * 3,
// };

const squareSettings = {
  columns: 30,
  rows: 20,
  width: canvasSize.width / 30,
  height: canvasSize.height / 20,
  minWidth: canvasSize.width / 30 / 5,
  minHeight: canvasSize.height / 20 / 5,
  maxWidth: (canvasSize.width / 30) * 3,
  maxHeight: (canvasSize.height / 20) * 3,
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

  console.log('GENERATED SQUARES', squares);
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
  // let row = 0;
  // let prevSquareInColumn, prevSquareInRow;

  squares.forEach((square) => {
    // if (prevSquareInColumn == undefined) {
    //   prevSquareInColumn = square;
    // }

    // // if (prevSquareInRow == undefined) {
    // //   prevSquareInRow = square
    // // }

    // if (prevSquareInColumn.row == row) {
    //   prevSquareInColumn = square;
    // }

    if (square.state == 'active') {
      // if (row == 0 && square.row == 0 && square.column == 0) {

      // }

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
  const totalColumnsLeft = activeSquare.column;
  const totalColumnsRight = squareSettings.columns - activeSquare.column - 1;

  const totalSpaceTop = activeSquare.y;
  const totalSpaceBottom =
    canvasSize.height - (activeSquare.y + activeSquare.h);
  const totalRowsTop = activeSquare.rows;
  const totalRowsBottom = squareSettings.rows - activeSquare.row - 1;

  let prevSquareInColumn;

  squares.forEach((s) => {
    if (s.row == square.row && s.column == square.column - 1) {
      prevSquareInColumn = s;
    }
  });

  if (square.column < activeSquare.column) {
    // if (prevSquareInColumn == undefined) {
    //   square.x = 0;
    //   square.w = squareSettings.minWidth;
    // }

    //
    //
    //
    // if (
    //   square.column == activeSquare.column - 1 &&
    //   prevSquareInColumn != undefined
    // ) {
    //   square.x = prevSquareInColumn.x + prevSquareInColumn.w;
    //   square.w = squareSettings.width;
    // } else if (prevSquareInColumn != undefined) {
    //   square.x = prevSquareInColumn.x + prevSquareInColumn.w;
    //   const coef = (1 / (activeSquare.column - 2)) * square.column;
    //   const wCoef = easeInCubic(coef);
    //   // const wCoef = easeInOutElastic(coef);
    //   // const wCoef = easeInOutExpo(coef);

    //   square.w = totalSpaceLeft * wCoef;
    // } else {
    //   square.x = 0;
    //   square.w = squareSettings.minWidth;
    // }
    //
    //
    //

    if (prevSquareInColumn != undefined) {
      square.x = prevSquareInColumn.x + prevSquareInColumn.w;
    } else {
      square.x = 0;
    }

    const coef = (1 / (activeSquare.column - 2)) * square.column;
    const wCoef = easing(coef);
    square.w = totalSpaceLeft * wCoef;
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

  // Wouldn't touch
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
      // console.log('SQUARE', square);
      const { x, y, w, h, color } = square;

      p.fill(color);
      p.rect(x, y, w, h);
    });
  };

  p.mouseMoved = () => {
    // console.log(p.mouseX, p.mouseY);
    markActiveSquare(p);
    updateSquares(p);
  };
}

document.addEventListener('DOMContentLoaded', () => {
  createSquares();
  new p5(sketch);
});
