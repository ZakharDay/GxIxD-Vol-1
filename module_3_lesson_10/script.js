// // prettier-ignore
// const ionian = [ 1,  'b2',  2,  'b3',  3,   4,  'b5',  5,  'b6',  6,  'b7',  7];
// // prettier-ignore
// const notes =  ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// // prettier-ignore
// const dorian = [ 1,  'b2',  2,  'b3', 3,    4,  'b5',  5,  'b6',  6,  'b7', 7];
// // prettier-ignore
// const notes =  ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'];

// // prettier-ignore
// const phrygian = [ 1,  'b2', 2,   'b3', 3,    4,  'b5',  5,  'b6', 6,   'b7', 7];
// // prettier-ignore
// const notes =    ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];

// // prettier-ignore
// const lydian = [ 1,  'b2',  2,  'b3',  3,   4,   'b5', 5,  'b6',  6,  'b7',  7];
// // prettier-ignore
// const notes =  ['F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'];

// lydian: {
//   formula: [ 1,   2,   3,  'b5', 5,   6,   7],
//   steps1:  [ 1,   1,   1,  0.5,  1,   1,   1],
//   steps2:  [ 2,   2,   2,    1,  2,   2,   2],
//   notes:   ['F', 'G', 'A', 'B', 'C', 'D', 'E'],
//   root:     'F'
// },

const modeKeys = [1, 'b2', 2, 'b3', 3, 4, 'b5', 5, 'b6', 6, 'b7', 7];

// prettier-ignore
const modes = {
  ionian: {
    formula: [1, 2, 3, 4, 5, 6, 7],
    steps1: [1, 1, 1, 1, 1, 1, 1],
    steps2: [2, 2, 2, 2, 2, 2, 2],
    notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    root: 'C',
    name: 'ionian',
  },
  dorian: {
    formula: [1, 2, 'b3', 4, 5, 6, 'b7'],
    steps1: [1, 1, 0.5, 1, 1, 1, 0.5],
    steps2: [2, 2, 1, 2, 2, 2, 1],
    notes: ['D', 'E', 'F', 'G', 'A', 'B', 'C'],
    root: 'D',
    name: 'dorian',
  },
  phrygian: {
    formula: [1, 'b2', 'b3', 4, 5, 'b6', 'b7'],
    steps1: [1, 0.5, 0.5, 1, 1, 0.5, 0.5],
    steps2: [2, 1, 2, 2, 2, 1, 2],
    notes: ['E', 'F', 'G', 'A', 'B', 'C', 'D'],
    root: 'E',
    name: 'phrygian',
  },
  lydian: {
    // formula: [ 1,   2,   3,  '#4', 5,   6,   7],
    formula: [1, 2, 3, 'b5', 5, 6, 7],
    steps1: [1, 1, 1, 0.5, 1, 1, 1],
    steps2: [2, 2, 2, 1, 2, 2, 2],
    notes: ['F', 'G', 'A', 'B', 'C', 'D', 'E'],
    root: 'F',
    name: 'lydian',
  },
  mixolydian: {
    formula: [1, 2, 3, 4, 5, 6, 'b7'],
    steps1: [1, 1, 1, 1, 1, 1, 0.5],
    steps2: [2, 2, 2, 2, 2, 2, 1],
    notes: ['G', 'A', 'B', 'C', 'D', 'E', 'F'],
    root: 'G',
    name: 'mixolydian',
  },
  aelian: {
    formula: [1, 2, 'b3', 4, 5, 'b6', 'b7'],
    steps1: [1, 1, 0.5, 1, 1, 0.5, 0.5],
    steps2: [2, 2, 1, 2, 2, 1, 2],
    notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    root: 'A',
    name: 'aelian',
  },
  locrian: {
    formula: [1, 'b2', 'b3', 4, 'b5', 'b6', 'b7'],
    steps1: [1, 0.5, 0.5, 1, 0.5, 0.5, 0.5],
    steps2: [2, 1, 2, 2, 1, 2, 2],
    notes: ['B', 'C', 'D', 'E', 'F', 'G', 'A'],
    root: 'B',
    name: 'locrian',
  },
};

// prettier-ignore
const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

let currentMode = modes['ionian'];
let part;

function chopAndMove(arr, k) {
  // k is the number of elements to chop from the beginning
  // and move to the end.

  if (k < 0 || k > arr.length) {
    console.error(
      'Invalid value for k. It must be between 0 and the array length.'
    );
    return arr; // Return original array or handle error as needed
  }

  const firstPart = arr.slice(0, k); // Get the first k elements
  const remainingPart = arr.slice(k); // Get the rest of the elements

  return remainingPart.concat(firstPart); // Combine them with the first part at the end
}

function createModulatedSequence(mode, root) {
  const currentModeKeys = {};
  const currentNotes = [];
  const sequence = [];

  Object.keys(modes).forEach((key) => {
    if (mode == key) {
      currentMode = modes[key];
    }
  });

  const currentRootInNotes = notes.indexOf(root);

  let octave = '4';

  const transformedNotes = chopAndMove(notes, currentRootInNotes);
  const indexOfA = transformedNotes.indexOf('B');

  transformedNotes.forEach((note, index) => {
    const modeKey = modeKeys[index];

    if (index > indexOfA) {
      octave = '5';
    }

    currentModeKeys[modeKey] = note + octave;
  });

  currentMode.formula.forEach((formulaKey) => {
    currentNotes.push(currentModeKeys[formulaKey]);
  });

  currentNotes.forEach((note, index) => {
    const bar = Math.floor(index / 4);
    const quarter = index - bar * 4;

    sequence.push({
      time: `${bar}:${quarter}:0`,
      noteName: note,
      duration: '4n',
      velocity: 1,
    });
  });

  return sequence;
}

function createSimpleSequence() {
  const sequence = [];

  notes.forEach((note, index) => {
    // BAR:QUARTER:SIXTEENTH

    // 0:0:0 0
    // 0:1:0 1
    // 0:2:0 2
    // 0:3:0 3
    // 1:0:0 4
    // 1:1:0 5
    // 1:2:0 6
    // 1:3:0 7
    // 2:0:0 8

    const bar = Math.floor(index / 4);
    const quarter = index - bar * 4;

    sequence.push({
      time: `${bar}:${quarter}:0`,
      noteName: note + '4',
      duration: '4n',
      velocity: 1,
    });

    // "4n": Quarter note
    // "8n": Eighth note
    // "16n": Sixteenth note
    // "2n": Half note
    // "4n.": Dotted-eighth note
    // "8t": Eighth note triplet
  });

  return sequence;
}

function play() {
  const synth = new Tone.Synth().toDestination();
  const sequence = createSimpleSequence();

  // const part = new Tone.Part((time, note) => {
  part = new Tone.Part((time, note) => {
    synth.triggerAttackRelease(
      note.noteName,
      note.duration,
      time,
      note.velocity
    );
  }, sequence).start(0);

  part.loopEnd = '3m';
  part.loop = true;

  Tone.Transport.bpm.value = 300;
  Tone.Transport.start();
}

function updatePart(mode, root) {
  // const { sequence } = this.state;
  part.clear();

  createModulatedSequence(mode, root).forEach((note) => {
    part.add(note);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.button');
  const changeButtons = document.querySelectorAll('.change');

  button.addEventListener('click', () => {
    play();
  });

  changeButtons.forEach((b) => {
    b.addEventListener('click', () => {
      let mode = currentMode.name;
      let root = currentMode.root;

      if (b.dataset.mode) {
        mode = b.dataset.mode;
      }

      if (b.dataset.root) {
        root = b.dataset.root;
      }

      updatePart(mode, root);
    });
  });

  // const test = [
  //   ['ionian', 'C'],
  //   ['dorian', 'D'],
  //   ['phrygian', 'E'],
  //   ['lydian', 'F'],
  //   ['mixolydian', 'G'],
  //   ['aelian', 'A'],
  //   ['locrian', 'B'],
  // ];

  // test.forEach((t) => {
  //   createModulatedSequence(t[0], t[1]);
  // });

  // createModulatedSequence('ionian', 'C');
});
