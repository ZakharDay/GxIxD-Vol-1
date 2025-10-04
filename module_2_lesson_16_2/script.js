const gridSize = 31;

//
// EASINGS START
//

function divideExponentially(total, numberOfParts) {
  let low = 1.0001;
  let high = 2;
  const epsilon = 1e-10;
  let mid;

  function calculateSum(r, n) {
    return (Math.pow(r, n) - 1) / (r - 1);
  }

  // Ensure the upper bound is high enough
  while (calculateSum(high, numberOfParts) < total) {
    high *= 2;
  }

  // Binary search to find the ratio r
  do {
    mid = (low + high) / 2;
    const currentSum = calculateSum(mid, numberOfParts);

    if (currentSum < total) {
      low = mid;
    } else {
      high = mid;
    }
  } while (high - low > epsilon);

  const r = mid;

  // Calculate the first term 'a'
  const a = (total * (r - 1)) / (Math.pow(r, numberOfParts) - 1);

  // Generate each part
  const parts = [];

  for (let i = 0; i < numberOfParts; i++) {
    parts.push(a * Math.pow(r, i));
  }

  return parts;
}

function crazyEasing(x) {
  if (x < 0.4) {
    return 4 * x * x * x;
  } else if (x > 0.6) {
    return 1 - Math.pow(-2 * x + 2, 3) / 2;
  } else {
    return 0.1;
  }
}

function easeInCubic(x) {
  return x * x * x;
}

function easeInOutCubic(x) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

function easeInQuint(x) {
  return x * x * x * x * x;
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

function initGrid() {
  const grid = document.createElement('section');

  for (let index = 0; index < gridSize * gridSize; index++) {
    const cell = document.createElement('div');
    grid.appendChild(cell);
  }

  document.body.appendChild(grid);
}

function calculateGridTemplate() {
  // const templateValues = [];
  // let fullSize = 100;

  // for (let index = 0; index < gridSize; index++) {
  //
  // Without easing
  //
  // const current = 1 / gridSize;
  // const coef = current;
  // const percent = fullSize * coef;
  //
  // End
  //

  //
  // Size problem
  //
  // const current = (1 / gridSize) * index;
  // const coef = crazyEasing(current);
  // const percent = fullSize * coef;
  // fullSize = fullSize - percent;
  //
  // End
  //

  //
  // Doesen't work right
  //
  // const current = (1 / gridSize) * index;
  // const coef = easeInCubic(current);
  // let percent;

  // if (index == 0) {
  //   percent = fullSize * coef;
  // } else {
  //   console.log(index - 1, templateValues[index - 1]);

  //   percent = fullSize * coef - templateValues[index - 1];
  // }
  //
  // End
  //

  // templateValues.push(percent);
  // }

  const templateValues = divideExponentially(100, gridSize);
  return templateValues.join('% ') + '%';
}

function setGridTemplate() {
  const grid = document.querySelector('section');
  const gridTemplateValue = calculateGridTemplate();

  grid.style.gridTemplateColumns = gridTemplateValue;
  grid.style.gridTemplateRows = gridTemplateValue;
}

document.addEventListener('DOMContentLoaded', () => {
  initGrid();
  setGridTemplate();
});
