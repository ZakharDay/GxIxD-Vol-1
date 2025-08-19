//
// UTILITIES
//

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//
// UTILITIES END
//

//
// VARS
//

const minSize = 20;
const maxSize = 60;

let elementVerticalDirection = 'down';
let elementHorizontalDirection = 'right';
let elementSizeDirection = 'up';
let framesTillNextCollision, speed, frequency;

const canvas = {
  w: 600,
  h: 400,
};

const figure = {
  x: 0,
  y: 0,
  r: 20,
};

//
// VARS END
//

//
// P5
//

function setup() {
  createCanvas(canvas.w, canvas.h);
  speed = 1;
  frequency = 3;
}

function draw() {
  changeElementPosition();
  changeElementSize();

  background(135, 206, 235);
  circle(figure.x, figure.y, figure.r);
}

//
// P5 END
//

//
// JS
//

function changeElementPosition() {
  const maxLeft = canvas.w - figure.r / 2;
  const maxTop = canvas.h - figure.r / 2;

  if (figure.x == 0 && figure.y == 0) {
    figure.x = getRandomInt(0, maxLeft);
    figure.y = getRandomInt(0, maxTop);
  } else {
    if (elementVerticalDirection == 'up') {
      figure.y -= speed;
    } else {
      figure.y += speed;
    }

    if (elementHorizontalDirection == 'left') {
      figure.x -= speed;
    } else {
      figure.x += speed;
    }
  }

  if (
    elementVerticalDirection == 'down' &&
    figure.y + figure.r / 2 >= canvas.h
  ) {
    elementVerticalDirection = 'up';

    console.log('up');

    changeSpeed();
    changeFrequency();
    calcNextCollision();
  }

  if (
    elementHorizontalDirection == 'right' &&
    figure.x + figure.r / 2 >= canvas.w
  ) {
    elementHorizontalDirection = 'left';

    console.log('left');

    changeSpeed();
    changeFrequency();
    calcNextCollision();
  }

  if (elementVerticalDirection == 'up' && figure.y - figure.r / 2 <= 0) {
    elementVerticalDirection = 'down';

    console.log('down');

    changeSpeed();
    changeFrequency();
    calcNextCollision();
  }

  if (elementHorizontalDirection == 'left' && figure.x - figure.r / 2 <= 0) {
    elementHorizontalDirection = 'right';

    console.log('right');

    changeSpeed();
    changeFrequency();
    calcNextCollision();
  }
}

function changeElementSize() {
  if (frequency && framesTillNextCollision) {
    const framesInCycle = framesTillNextCollision / frequency / 2;
    const pixelsInFrame = (maxSize - minSize) / framesInCycle;

    if (elementSizeDirection == 'up') {
      figure.r += parseInt(pixelsInFrame);
    } else {
      figure.r -= parseInt(pixelsInFrame);
    }

    if (figure.r >= maxSize) {
      elementSizeDirection = 'down';
    }

    if (figure.r <= minSize) {
      elementSizeDirection = 'up';
    }
  }
}

function calcNextCollision() {
  const s = speed;
  const currentFrame = frameCount;
  let frame = frameCount;
  let x = figure.x;
  let y = figure.y;

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

    const collision = detectCollision(x, y);

    if (collision == 1) {
      frame++;
      nextCollisionFrame = frame;
      framesTillNextCollision = nextCollisionFrame - currentFrame;
    } else {
      frame++;
    }
  }
}

function detectCollision(x, y) {
  if (elementVerticalDirection == 'down' && y + minSize / 2 >= canvas.h) {
    return true;
  }

  if (elementHorizontalDirection == 'right' && x + minSize / 2 >= canvas.w) {
    return true;
  }

  if (elementVerticalDirection == 'up' && y - minSize / 2 <= 0) {
    return true;
  }

  if (elementHorizontalDirection == 'left' && x - minSize / 2 <= 0) {
    return true;
  }

  return false;
}

function changeSpeed() {
  speed = getRandomInt(1, 5);
}

function changeFrequency() {
  frequency = getRandomInt(1, 7);
}

//
// JS END
//
