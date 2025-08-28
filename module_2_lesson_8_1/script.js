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
const cycleLimit = canvasSize / squareSize;
const squareTypes = ['empty', 'line1', 'line2', 'full'];
const squareObjects = ['empty', 'square', 'circle', 'triangle'];

function sketch1(p) {
  p.setup = () => {
    const canvas = document.getElementById('case1');
    p.createCanvas(canvasSize, canvasSize, canvas);
    p.noLoop();
  };

  p.draw = () => {
    p.background(0, 0, 0);

    for (let row = 0; row < cycleLimit; row++) {
      const squareX = row * squareSize;

      const firstLineX1 = squareX;
      const firstLineX2 = squareX + squareSize;

      const secondLineX1 = squareX + squareSize;
      const secondLineX2 = squareX;

      for (let column = 0; column < cycleLimit; column++) {
        const squareY = column * squareSize;

        const firstLineY1 = squareY;
        const firstLineY2 = squareY + squareSize;

        const secondLineY1 = squareY;
        const secondLineY2 = squareY + squareSize;

        p.noStroke();
        p.square(squareX, squareY, squareSize);

        const squareType = squareTypes.sample();

        if (squareType != 'empty') {
          p.stroke(0);

          if (squareType == 'line1' || squareType == 'full') {
            p.line(firstLineX1, firstLineY1, firstLineX2, firstLineY2);
          }

          if (squareType == 'line2' || squareType == 'full') {
            p.line(secondLineX1, secondLineY1, secondLineX2, secondLineY2);
          }
        }
      }
    }
  };
}

function sketch2(p) {
  p.setup = () => {
    const canvas = document.getElementById('case2');
    p.createCanvas(canvasSize, canvasSize, canvas);
    p.frameRate(4);
  };

  p.draw = () => {
    p.background(0, 0, 0);

    for (let row = 0; row < cycleLimit; row++) {
      const squareX = row * squareSize;

      const firstLineX1 = squareX;
      const firstLineX2 = squareX + squareSize;

      const secondLineX1 = squareX + squareSize;
      const secondLineX2 = squareX;

      for (let column = 0; column < cycleLimit; column++) {
        const squareY = column * squareSize;

        const firstLineY1 = squareY;
        const firstLineY2 = squareY + squareSize;

        const secondLineY1 = squareY;
        const secondLineY2 = squareY + squareSize;

        p.noStroke();
        p.square(squareX, squareY, squareSize);

        const squareType = squareTypes.sample();

        if (squareType != 'empty') {
          p.stroke(0);

          if (squareType == 'line1' || squareType == 'full') {
            const firstLineStrokeWeight = getRandomInt(2, 5);
            p.strokeWeight(firstLineStrokeWeight);
            p.line(firstLineX1, firstLineY1, firstLineX2, firstLineY2);
          }

          if (squareType == 'line2' || squareType == 'full') {
            const secondLineStrokeWeight = getRandomInt(2, 5);
            p.strokeWeight(secondLineStrokeWeight);
            p.line(secondLineX1, secondLineY1, secondLineX2, secondLineY2);
          }
        }
      }
    }
  };
}

function sketch3(p) {
  p.setup = () => {
    const canvas = document.getElementById('case3');
    p.createCanvas(canvasSize, canvasSize, canvas);
    p.frameRate(4);
  };

  p.draw = () => {
    p.background(0, 0, 0);

    for (let row = 0; row < cycleLimit; row++) {
      const squareX = row * squareSize;

      const firstLineX1 = squareX;
      const firstLineX2 = squareX + squareSize;

      const secondLineX1 = squareX + squareSize;
      const secondLineX2 = squareX;

      for (let column = 0; column < cycleLimit; column++) {
        const squareY = column * squareSize;

        const firstLineY1 = squareY;
        const firstLineY2 = squareY + squareSize;

        const secondLineY1 = squareY;
        const secondLineY2 = squareY + squareSize;

        const color = getRandomInt(100, 200);
        const squareType = squareTypes.sample();

        p.noStroke();
        p.fill(color);
        p.square(squareX, squareY, squareSize);

        if (squareType != 'empty') {
          p.stroke(0);

          if (squareType == 'line1' || squareType == 'full') {
            const firstLineStrokeWeight = getRandomInt(2, 5);
            p.strokeWeight(firstLineStrokeWeight);
            p.line(firstLineX1, firstLineY1, firstLineX2, firstLineY2);
          }

          if (squareType == 'line2' || squareType == 'full') {
            const secondLineStrokeWeight = getRandomInt(2, 5);
            p.strokeWeight(secondLineStrokeWeight);
            p.line(secondLineX1, secondLineY1, secondLineX2, secondLineY2);
          }
        }
      }
    }
  };
}

function sketch4(p) {
  p.setup = () => {
    const canvas = document.getElementById('case4');
    p.createCanvas(canvasSize, canvasSize, canvas);
    // p.noLoop();
    p.frameRate(4);
  };

  p.draw = () => {
    p.background(0, 0, 0);

    for (let row = 0; row < cycleLimit; row++) {
      const squareX = row * squareSize;

      for (let column = 0; column < cycleLimit; column++) {
        const squareY = column * squareSize;

        const color = {
          r: getRandomInt(0, 50),
          g: getRandomInt(200, 255),
          b: getRandomInt(0, 50),
        };

        const squareType = squareObjects.sample();

        p.noStroke();
        p.fill(color.r, color.g, color.b);
        p.square(squareX, squareY, squareSize);

        if (squareType != 'empty') {
          const padding = 10;

          if (squareType == 'circle') {
            // рисуем круг
            const d = squareSize - padding * 2;

            p.fill(255);
            p.circle(squareX + padding + d / 2, squareY + padding + d / 2, d);
          }

          if (squareType == 'square') {
            // рисуем квадрат

            p.fill(255);
            p.square(
              squareX + padding,
              squareY + padding,
              squareSize - padding * 2
            );
          }

          if (squareType == 'triangle') {
            // рисуем треугольник

            p.fill(255);
            p.triangle(
              squareX + squareSize / 2,
              squareY + padding,
              squareX + squareSize - padding,
              squareY + squareSize - padding,
              squareX + padding,
              squareY + squareSize - padding
            );
          }
        }
      }
    }
  };
}

function sketch5(p) {
  p.setup = () => {
    const canvas = document.getElementById('case5');
    p.createCanvas(canvasSize, canvasSize, canvas);
  };

  p.draw = () => {
    p.background(0, 0, 0);
    p.circle(p.mouseX, p.mouseY, 30);
  };
}

function sketch6(p) {
  p.setup = () => {
    const canvas = document.getElementById('case6');
    p.createCanvas(canvasSize, canvasSize, canvas);
    p.background(0, 0, 0);
  };

  p.draw = () => {
    p.circle(p.mouseX, p.mouseY, 30);
  };
}

function sketch7(p) {
  let size = 30;

  p.setup = () => {
    const canvas = document.getElementById('case7');
    p.createCanvas(canvasSize, canvasSize, canvas);
  };

  p.draw = () => {
    p.background(0, 0, 0);
    p.circle(p.mouseX, p.mouseY, size);
  };

  p.mousePressed = () => {
    size = 50;
    p.fill(0, 255, 0);
  };

  p.mouseReleased = () => {
    size = 30;
    p.fill(255);
  };

  p.mouseClicked = () => {
    p.circle(10, 10, 10);
  };
}

function sketch8(p) {
  let state = 'enabled';

  p.setup = () => {
    const canvas = document.getElementById('case8');
    p.createCanvas(canvasSize, canvasSize, canvas);
    // p.noLoop();
    p.frameRate(4);
  };

  p.draw = () => {
    if (state == 'enabled') {
      p.background(0, 0, 0);

      for (let row = 0; row < cycleLimit; row++) {
        const squareX = row * squareSize;

        for (let column = 0; column < cycleLimit; column++) {
          const squareY = column * squareSize;

          const color = {
            r: getRandomInt(0, 50),
            g: getRandomInt(200, 255),
            b: getRandomInt(0, 50),
          };

          const squareType = squareObjects.sample();

          p.noStroke();
          p.fill(color.r, color.g, color.b);
          p.square(squareX, squareY, squareSize);

          if (squareType != 'empty') {
            const padding = 10;

            if (squareType == 'circle') {
              // рисуем круг
              const d = squareSize - padding * 2;

              p.fill(255);
              p.circle(squareX + padding + d / 2, squareY + padding + d / 2, d);
            }

            if (squareType == 'square') {
              // рисуем квадрат

              p.fill(255);
              p.square(
                squareX + padding,
                squareY + padding,
                squareSize - padding * 2
              );
            }

            if (squareType == 'triangle') {
              // рисуем треугольник

              p.fill(255);
              p.triangle(
                squareX + squareSize / 2,
                squareY + padding,
                squareX + squareSize - padding,
                squareY + squareSize - padding,
                squareX + padding,
                squareY + squareSize - padding
              );
            }
          }
        }
      }
    }
  };

  p.mousePressed = () => {
    state = 'disabled';
  };

  p.mouseReleased = () => {
    state = 'enabled';
  };
}

document.addEventListener('DOMContentLoaded', () => {
  new p5(sketch1);
  new p5(sketch2);
  new p5(sketch3);
  new p5(sketch4);
  new p5(sketch5);
  new p5(sketch6);
  new p5(sketch7);
  new p5(sketch8);
});
