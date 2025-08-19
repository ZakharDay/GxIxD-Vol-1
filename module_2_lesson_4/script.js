//
// UTILITIES
//

Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

//
// UTILITIES END
//

//
// CASE 1
//

const cardsContent = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'];
let openedCardsLimit = 2;
let lastCard;

function createCard(index) {
  const container = document.querySelector('.case1');

  const card = document.createElement('div');
  container.appendChild(card);

  const front = document.createElement('div');
  const back = document.createElement('div');
  card.appendChild(front);
  card.appendChild(back);

  card.classList.add('card');
  front.classList.add('front');
  back.classList.add('back');

  back.innerText = cardsContent[index];

  card.addEventListener('click', () => {
    const openedCards = document.querySelectorAll('.case1 .card.opened');

    if (
      !card.classList.contains('opened') &&
      openedCards.length < openedCardsLimit
    ) {
      card.classList.add('opened');

      if (lastCard) {
        if (
          card.querySelector('.back').innerText ==
          lastCard.querySelector('.back').innerText
        ) {
          lastCard = undefined;
          openedCardsLimit += 2;
        } else {
          setTimeout(() => {
            lastCard.classList.remove('opened');
            card.classList.remove('opened');
            lastCard = null;
          }, 2000);
        }
      } else {
        lastCard = card;
      }
    }
  });
}

function initCase1() {
  shuffle(cardsContent);

  for (let index = 0; index < 10; index++) {
    createCard(index);
  }
}

//
// CASE 1 END
//

//
// CASE 2
//

const watches = [];

function createWatch() {
  const container = document.querySelector('.case2');
  const { width, height } = container.getBoundingClientRect();

  const watch = document.createElement('div');
  const hour = document.createElement('div');
  const minute = document.createElement('div');
  const second = document.createElement('div');

  watch.classList.add('watch');
  watch.style.left = `${getRandomInt(-100, width)}px`;
  watch.style.top = `${getRandomInt(-100, height)}px`;

  hour.classList.add('hour');
  minute.classList.add('minute');
  second.classList.add('second');

  const hours = getRandomInt(0, 360);
  hour.style.transform = `rotate(${hours}deg)`;

  const minutes = getRandomInt(0, 60);
  minute.style.transform = `rotate(${minutes * 6}deg)`;

  const seconds = getRandomInt(0, 60);
  second.style.transform = `rotate(${seconds * 6}deg)`;

  for (let index = 0; index < 6; index++) {
    const mark = document.createElement('div');
    mark.classList.add('mark');
    watch.appendChild(mark);
  }

  watch.appendChild(hour);
  watch.appendChild(minute);
  watch.appendChild(second);

  const circle = document.createElement('div');
  circle.classList.add('circle');
  watch.appendChild(circle);

  container.appendChild(watch);

  watches.push({
    hour,
    hours,
    minute,
    minutes,
    second,
    seconds,
  });
}

function updateWatchSeconds(watch) {
  let { second, seconds } = watch;

  if (seconds < 60) {
    seconds++;
  } else {
    seconds = 1;
  }

  watch.seconds = seconds;
  second.style.transform = `rotate(${seconds * 6}deg)`;
}

function updateWatchMinutes(watch) {
  let { minute, minutes } = watch;

  if (minutes < 60) {
    minutes++;
  } else {
    minutes = 1;
  }

  watch.minutes = minutes;
  minute.style.transform = `rotate(${minutes * 6}deg)`;
}

function updateWatchHours(watch) {
  let { hour, hours } = watch;

  hours = getRandomInt(0, 360);

  watch.hours = hours;
  hour.style.transform = `rotate(${hours}deg)`;
}

function startAllWatches() {
  setInterval(() => {
    watches.forEach((watch) => {
      updateWatchSeconds(watch);
    });
  }, 1000);

  document.addEventListener('scroll', () => {
    watches.forEach((watch) => {
      updateWatchMinutes(watch);
    });
  });

  const container = document.querySelector('.case2');

  container.addEventListener('click', () => {
    watches.forEach((watch) => {
      updateWatchHours(watch);
    });
  });
}

function initCase2() {
  for (let index = 0; index < 300; index++) {
    createWatch();
  }

  startAllWatches();
}

//
// CASE 2 END
//

//
// CASE 3
//

const words = [
  'Variables',
  'Loops',
  'Functions',
  'Recursion',
  'Algorithms',
  'Arrays',
  'Objects',
  'Parameters',
  'Conditionals',
  'Strings',
  'Fractals',
  'Noise',
  'Particle Systems',
  'Emergence',
  'L-systems',
  'Randomness',
  'Symmetry',
  'Tessellation',
  'Chaos Theory',
  'Cellular Automata',
  'Vector Fields',
  'Perlin Noise',
  'Genetic Algorithms',
  'Trigonometry',
  'Ray Marching',
  'Shaders',
  'Procedural Generation',
  'Voronoi Diagrams',
  'Convolution Matrix',
  'Metaballs',
];

function createElementWithText(container, containerWidth, containerHeight) {
  const element = document.createElement('div');
  element.innerText = words.sample();
  container.appendChild(element);

  const { width, height } = element.getBoundingClientRect();
  element.style.left = `${getRandomInt(0, containerWidth - width)}px`;
  element.style.top = `${getRandomInt(0, containerHeight - height)}px`;
  element.style.backgroundColor = `hsl(0 0% ${getRandomInt(10, 50)}%)`;
}

function initCase3() {
  const container = document.querySelector('.case3');
  const { width, height } = container.getBoundingClientRect();

  setInterval(() => {
    createElementWithText(container, width, height);
  }, 300);
}

//
// CASE 3 END
//

//
// CASE 4
//

let currentFrame = 0;
let elementVerticalDirection = 'down';
let elementHorizontalDirection = 'right';
let size = 30;
let elementX, elementY, speed;

function changeElementPosition(
  element,
  containerWidth,
  containerHeight,
  containerLeft,
  containerTop
) {
  const maxLeft = containerWidth - size;
  const maxTop = containerHeight - size;

  if (!elementX && !elementY) {
    elementX = getRandomInt(0, maxLeft);
    elementY = getRandomInt(0, maxTop);
  } else {
    if (elementVerticalDirection == 'up') {
      elementY -= speed;
    } else {
      elementY += speed;
    }

    if (elementHorizontalDirection == 'left') {
      elementX -= speed;
    } else {
      elementX += speed;
    }
  }

  element.style.width = `${size}px`;
  element.style.height = `${size}px`;
  element.style.left = `${elementX}px`;
  element.style.top = `${elementY}px`;

  const { left, top } = element.getBoundingClientRect();

  if (top >= containerTop + maxTop) {
    elementVerticalDirection = 'up';

    changeSpeed();

    calcNextCollision(
      containerWidth,
      containerHeight,
      containerLeft,
      containerTop,
      left,
      top
    );
  }

  if (left >= containerLeft + maxLeft) {
    elementHorizontalDirection = 'left';

    changeSpeed();

    calcNextCollision(
      containerWidth,
      containerHeight,
      containerLeft,
      containerTop,
      left,
      top
    );
  }

  if (top <= containerTop) {
    elementVerticalDirection = 'down';

    changeSpeed();

    calcNextCollision(
      containerWidth,
      containerHeight,
      containerLeft,
      containerTop,
      left,
      top
    );
  }

  if (left <= containerLeft) {
    elementHorizontalDirection = 'right';

    changeSpeed();

    calcNextCollision(
      containerWidth,
      containerHeight,
      containerLeft,
      containerTop,
      left,
      top
    );
  }
}

function changeSpeed() {
  speed = getRandomInt(1, 5);
}

function calcNextCollision(
  containerWidth,
  containerHeight,
  containerLeft,
  containerTop,
  left,
  top
) {
  const s = speed;
  let frame = currentFrame;
  let x = left;
  let y = top;

  let nextCollisionFrame;

  while (nextCollisionFrame == undefined) {
    if (elementVerticalDirection == 'up') {
      y -= s;
    } else {
      y += s;
    }

    if (elementHorizontalDirection == 'left') {
      x -= s;
    } else {
      x += s;
    }

    const collision = detectCollision(
      containerWidth,
      containerHeight,
      containerLeft,
      containerTop,
      x,
      y
    );

    if (collision == 1) {
      nextCollisionFrame = frame;
    } else {
      frame++;
    }
  }
}

function detectCollision(
  containerWidth,
  containerHeight,
  containerLeft,
  containerTop,
  left,
  top
) {
  if (
    elementVerticalDirection == 'down' &&
    top >= containerTop + containerHeight - size
  ) {
    return true;
  }

  if (
    elementHorizontalDirection == 'right' &&
    left >= containerLeft + containerWidth - size
  ) {
    return true;
  }

  if (elementVerticalDirection == 'up' && top <= containerTop) {
    return true;
  }

  if (elementHorizontalDirection == 'left' && left <= containerLeft) {
    return true;
  }

  return false;
}

function initCase4() {
  changeSpeed();

  const container = document.querySelector('.case4');
  const { width, height, left, top } = container.getBoundingClientRect();

  const element = document.createElement('div');
  container.appendChild(element);

  // const frameRate = 1000 / 60;
  const frameRate = 100;

  setInterval(() => {
    changeElementPosition(element, width, height, left, top);
    currentFrame++;
  }, frameRate);
}

//
// CASE 4 END
//

document.addEventListener('DOMContentLoaded', () => {
  initCase1();
  initCase2();
  initCase3();
  initCase4();
});
