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

//
// UTILITIES END
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

let elementVerticalDirection = 'down';
let elementHorizontalDirection = 'right';
let elementX, elementY;

function changeElementPosition(
  element,
  containerWidth,
  containerHeight,
  containerLeft,
  containerTop
) {
  const { width, height, left, top } = element.getBoundingClientRect();
  const maxLeft = containerWidth - width;
  const maxTop = containerHeight - height;

  if (!elementX && !elementY) {
    elementX = getRandomInt(0, maxLeft);
    elementY = getRandomInt(0, maxTop);
  } else {
    if (elementVerticalDirection == 'up') {
      elementY -= 1;
    } else {
      elementY += 1;
    }

    if (elementHorizontalDirection == 'left') {
      elementX -= 1;
    } else {
      elementX += 1;
    }
  }

  element.style.left = `${elementX}px`;
  element.style.top = `${elementY}px`;

  if (top >= containerTop + containerHeight - height) {
    console.log('Bottom reached');
    elementVerticalDirection = 'up';
  }

  if (left >= containerLeft + containerWidth - width) {
    console.log('Right reached');
    elementHorizontalDirection = 'left';
  }

  if (top <= containerTop) {
    console.log('Top reached');
    elementVerticalDirection = 'down';
  }

  if (left <= containerLeft) {
    console.log('Left reached');
    elementHorizontalDirection = 'right';
  }
}

function initCase4() {
  const container = document.querySelector('.case4');
  const { width, height, left, top } = container.getBoundingClientRect();

  const element = document.createElement('div');
  container.appendChild(element);

  const speed = 1000 / 60;

  setInterval(() => {
    changeElementPosition(element, width, height, left, top);
  }, speed);
}

//
// CASE 4 END
//

document.addEventListener('DOMContentLoaded', () => {
  initCase3();
  initCase4();
});
