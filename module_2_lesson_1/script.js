function getRandomColorClass() {
  const colorClasses = ['red', 'green', 'blue'];

  const colorClassesLength = colorClasses.length;
  const randomFloat = Math.random() * colorClassesLength;
  const randomInteger = Math.floor(randomFloat);
  const colorClass = colorClasses[randomInteger];

  return colorClass;
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function createRandomlyRotatedSquare() {
  const container = document.querySelector('.squaresContainer');

  const div = document.createElement('div');
  const randomColorClass = getRandomColorClass();
  const randomDegrees = getRandomArbitrary(0, 360);

  div.classList.add('square');
  div.classList.add(randomColorClass);
  div.style.transform = `rotate(${randomDegrees}deg)`;

  container.appendChild(div);

  div.addEventListener('click', () => {
    const squareClassList = div.classList;

    if (squareClassList.contains('black')) {
      killSquare(div);
    } else {
      div.classList.remove('red', 'green', 'blue');
      div.classList.add('black');
      div.style.transform = 'rotate(0deg)';
    }

    addButtonKillAll(4);
    checkForAllKilledAndNotice();
  });
}

function rotateSquares() {
  const squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    const squareClassList = square.classList;

    if (squareClassList.contains('black')) {
      if (!squareClassList.contains('killed')) {
        square.style.transform = 'rotate(0deg)';
      }
    } else {
      const randomDegrees = getRandomArbitrary(1, 89);
      square.style.transform = `rotate(${randomDegrees}deg)`;
    }
  });
}

function countBlackSquares() {
  const squares = document.querySelectorAll('.square');
  let quantity = 0;

  squares.forEach((square) => {
    const squareClassList = square.classList;

    if (
      squareClassList.contains('black') &&
      !squareClassList.contains('killed')
    ) {
      quantity++;
    }
  });

  return quantity;
}

function addButtonKillAll(killLimit) {
  const blackSquaresQuantity = countBlackSquares();
  let button = document.querySelector('.killAllButton');

  if (blackSquaresQuantity >= killLimit && !button) {
    button = document.createElement('div');
    button.classList.add('killAllButton');
    button.innerText = 'Kill All';

    button.addEventListener('click', () => {
      const squares = document.querySelectorAll('.square');

      squares.forEach((square) => {
        const squareClassList = square.classList;

        if (squareClassList.contains('black')) {
          killSquare(square);
        }
      });

      button.remove();
      checkForAllKilledAndNotice();
    });

    document.body.appendChild(button);
  }
}

function checkForAllKilledAndNotice() {
  const squares = document.querySelectorAll('.square');
  let quantity = 0;

  squares.forEach((square) => {
    const squareClassList = square.classList;

    if (!squareClassList.contains('killed')) {
      quantity++;
    }
  });

  if (quantity <= 0) {
    const h1 = document.querySelector('h1');
    h1.innerText = 'You killed all!';
  }
}

function initMassKillButton() {
  const h1 = document.querySelector('h1');

  h1.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
      const squareClassList = square.classList;

      if (!squareClassList.contains('killed')) {
        const kill = getRandomArbitrary(0, 2);

        if (kill == 1) {
          killSquare(square);
        }
      }
    });

    checkForAllKilledAndNotice();
  });
}

function killSquare(square) {
  square.style.width = '0px';
  square.style.height = '0px';
  square.classList.add('black');
  square.classList.add('killed');
}

//
//
//
//
//

document.addEventListener('DOMContentLoaded', () => {
  for (let index = 0; index < 1000; index++) {
    createRandomlyRotatedSquare();
  }

  setInterval(rotateSquares, 1000);

  initMassKillButton();
});

window.addEventListener('resize', () => {
  console.log('resize');
});
