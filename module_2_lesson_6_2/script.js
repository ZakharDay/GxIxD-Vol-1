function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//
//
//

const minSize = 20;
const maxSize = 60;

let currentFrame = 0;
let framesTillNextCollision = 0;
let elementVerticalDirection = 'down';
let elementHorizontalDirection = 'right';
let elementSizeDirection = 'up';
// let size = 20;
let speed, frequency;

const canvas = {
  w: 600,
  h: 400,
};

const figure = {
  x: 0,
  y: 0,
  r: 20,
};

function setup() {
  createCanvas(canvas.w, canvas.h);
  speed = 1;
}

function draw() {
  background(135, 206, 235);
  changeElementPosition();
}

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

  circle(figure.x, figure.y, figure.r);

  if (
    elementVerticalDirection == 'down' &&
    figure.y + figure.r / 2 == canvas.h
  ) {
    elementVerticalDirection = 'up';

    console.log('up');

    // changeSpeed();
    // changeFrequency();

    // calcNextCollision(
    //   containerWidth,
    //   containerHeight,
    //   containerLeft,
    //   containerTop,
    //   left,
    //   top
    // );
  }

  if (
    elementHorizontalDirection == 'right' &&
    figure.x + figure.r / 2 == canvas.w
  ) {
    elementHorizontalDirection = 'left';

    console.log('left');

    // changeSpeed();
    // changeFrequency();

    // calcNextCollision(
    //   containerWidth,
    //   containerHeight,
    //   containerLeft,
    //   containerTop,
    //   left,
    //   top
    // );
  }

  if (elementVerticalDirection == 'up' && figure.y - figure.r / 2 == 0) {
    elementVerticalDirection = 'down';

    console.log('down');

    // changeSpeed();
    // changeFrequency();

    // calcNextCollision(
    //   containerWidth,
    //   containerHeight,
    //   containerLeft,
    //   containerTop,
    //   left,
    //   top
    // );
  }

  if (elementHorizontalDirection == 'left' && figure.x - figure.r / 2 == 0) {
    elementHorizontalDirection = 'right';

    console.log('right');

    // changeSpeed();
    // changeFrequency();

    // calcNextCollision(
    //   containerWidth,
    //   containerHeight,
    //   containerLeft,
    //   containerTop,
    //   left,
    //   top
    // );
  }
}

//
//
//
//

// function changeElementSize() {
//   if (frequency) {
//     const framesInCycle = framesTillNextCollision / frequency / 2;
//     const pixelsInFrame = (maxSize - minSize) / framesInCycle;

//     if (elementSizeDirection == 'up') {
//       size += pixelsInFrame;
//     } else {
//       size -= pixelsInFrame;
//     }

//     if (size >= maxSize) {
//       elementSizeDirection = 'down';
//     }

//     if (size <= minSize) {
//       elementSizeDirection = 'up';
//     }
//   }
// }

// function changeSpeed() {
//   speed = getRandomInt(1, 5);
// }

// function changeFrequency() {
//   frequency = getRandomInt(1, 7);
// }

// function calcNextCollision(
//   containerWidth,
//   containerHeight,
//   containerLeft,
//   containerTop,
//   left,
//   top
// ) {
//   const s = speed;
//   let frame = currentFrame;
//   let x = left;
//   let y = top;

//   let nextCollisionFrame;

//   while (nextCollisionFrame == undefined) {
//     if (elementVerticalDirection == 'up') {
//       y -= s;
//     } else {
//       y += s;
//     }

//     if (elementHorizontalDirection == 'left') {
//       x -= s;
//     } else {
//       x += s;
//     }

//     const collision = detectCollision(
//       containerWidth,
//       containerHeight,
//       containerLeft,
//       containerTop,
//       x,
//       y
//     );

//     if (collision == 1) {
//       frame++;
//       nextCollisionFrame = frame;
//       framesTillNextCollision = nextCollisionFrame - currentFrame;
//     } else {
//       frame++;
//     }
//   }
// }

// function detectCollision(
//   containerWidth,
//   containerHeight,
//   containerLeft,
//   containerTop,
//   left,
//   top
// ) {
//   if (
//     elementVerticalDirection == 'down' &&
//     top >= containerTop + containerHeight - size
//   ) {
//     return true;
//   }

//   if (
//     elementHorizontalDirection == 'right' &&
//     left >= containerLeft + containerWidth - size
//   ) {
//     return true;
//   }

//   if (elementVerticalDirection == 'up' && top <= containerTop) {
//     return true;
//   }

//   if (elementHorizontalDirection == 'left' && left <= containerLeft) {
//     return true;
//   }

//   return false;
// }
