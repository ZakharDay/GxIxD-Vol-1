Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const capchaSymbols = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

let capchaText = '';

function generateCapchaText() {
  let text = '';

  for (let index = 0; index < 6; index++) {
    text += capchaSymbols.sample();
  }

  return text;
}

function checkCapcha() {
  const capchaInput = document.querySelector('.capchaInput');

  if (capchaInput.value.toLowerCase() == capchaText.toLowerCase()) {
    toggleCapcha();
  } else {
    capchaInput.style.border = '1px solid red';
  }
}

function toggleCapcha() {
  const capcha = document.querySelector('.capcha');
  const content = document.querySelector('.content');

  capcha.classList.toggle('hidden');
  content.classList.toggle('hidden');
}

function initCapcha() {
  const capchaTextElement = document.querySelector('.capchaText');
  capchaText = generateCapchaText();
  capchaTextElement.innerText = capchaText;

  const capchaButton = document.querySelector('.capchaButton');
  capchaButton.addEventListener('click', checkCapcha);
}

document.addEventListener('DOMContentLoaded', initCapcha);
