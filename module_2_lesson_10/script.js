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

const frameRateInMils = 1000 / 2;

let squares = [];
let state = 'enabled';
let lives = 3;
let score = 0;

let container;

function showRestartButton() {
  const container = document.getElementById('content');

  const button = document.createElement('div');
  button.classList.add('button');
  button.innerText = 'Restart Game';

  container.appendChild(button);

  button.addEventListener('click', () => {
    button.remove();
    startGame();
  });
}

function incrementAndUpdateScore() {
  score++;

  const el = document.getElementById('score');
  el.innerText = `Score: ${score}`;
}

function decrementAndUpdateLives() {
  lives--;

  const el = document.getElementById('lives');
  el.innerText = `Lives: ${lives}`;
}

function generateSquare(index) {
  return {
    color: {
      r: getRandomInt(0, 50),
      g: getRandomInt(200, 255),
      b: getRandomInt(0, 50),
    },
    figure: squareFigures.sample(),
    state: 'initial',
    index,
  };
}

function createSquares() {
  for (let index = 0; index < 36; index++) {
    squares.push(generateSquare(index));
  }
}

function updateSquares() {
  const updatedSquares = [];

  squares.forEach((square) => {
    if (square.state == 'initial') {
      const updatedSquare = generateSquare(square.column, square.row);
      updatedSquares.push(updatedSquare);
    } else {
      updatedSquares.push(square);
    }
  });

  squares = updatedSquares;
}

function markAllActiveAsError() {
  const updatedSquares = [];

  squares.forEach((square) => {
    if (square.state == 'active') {
      square.state = 'error';
    }

    updatedSquares.push(square);
  });

  squares = updatedSquares;
}

function activateSquare(p) {
  const activeSquares = squares.filter((square) => square.state == 'active');
  let uniqFigures;

  if (activeSquares.length > 0) {
    const activeSquareFigures = activeSquares.map((s) => {
      return s.figure;
    });

    uniqFigures = [...new Set(activeSquareFigures)];
  }

  squares.forEach((square) => {
    if (
      p.mouseX >= square.x &&
      p.mouseX < square.x + squareSize &&
      p.mouseY >= square.y &&
      p.mouseY < square.y + squareSize
    ) {
      if (square.state == 'initial') {
        if (activeSquares.length > 0) {
          if (square.figure == uniqFigures[0]) {
            square.state = 'active';

            if (activeSquares.length >= 2) {
              state = 'win';
              incrementAndUpdateScore();
            }
          } else {
            square.state = 'error';
            state = 'error';
            markAllActiveAsError();
            decrementAndUpdateLives();

            if (lives <= 0) {
              showRestartButton();
            }
          }
        } else {
          square.state = 'active';
        }
      }
    }
  });
}

function renderSquares() {
  squares.forEach((square) => {
    const element = document.createElement('div');
    element.classList.add('squareButton');
    element.style.backgroundColor = `rgb(${square.color.r}, ${square.color.g}, ${square.color.b})`;

    const figure = document.createElement('div');
    figure.classList.add(square.figure);

    element.appendChild(figure);
    container.appendChild(element);
  });
}

function rerenderSquares() {
  squares.forEach((square, index) => {
    const element = container.children[index];
    let color;

    switch (square.state) {
      case 'active':
        color = `rgb(${square.color.r}, ${square.color.b}, ${square.color.g})`;
        break;

      case 'error':
        color = `rgb(${square.color.g}, ${square.color.r}, ${square.color.b})`;
        break;

      default:
        color = `rgb(${square.color.r}, ${square.color.g}, ${square.color.b})`;
        break;
    }

    element.children[0].className = '';
    element.children[0].classList.add(square.figure);
    element.style.backgroundColor = color;
  });
}

function sketch1(p) {
  p.mousePressed = () => {
    state = 'disabled';

    if (lives > 0) {
      activateSquare(p);
    }
  };

  p.mouseDragged = () => {
    if (state == 'disabled' && lives > 0) {
      activateSquare(p);
    }
  };

  p.mouseReleased = () => {
    state = 'enabled';

    squares.forEach((square) => {
      square.state = 'initial';
    });
  };
}

function initGame() {
  container = document.getElementById('case1');

  createSquares();

  if (container.children.length == 0) {
    renderSquares();
  }

  setInterval(() => {
    updateSquares();
    rerenderSquares();
  }, frameRateInMils);
}

document.addEventListener('DOMContentLoaded', () => {
  initGame();
});
