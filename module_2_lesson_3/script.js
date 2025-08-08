function playNote(note) {
  const notePlaying = document.querySelector('.notePlaying');
  notePlaying.innerHTML = note.dataset.note;
}

function initPiano() {
  const notes = document.querySelectorAll('.note');
  console.log('NodeList', notes);

  notes.forEach((note) => {
    note.addEventListener('click', () => {
      playNote(note);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const audio1 = document.getElementById('audio1');
  const audio1PlayButton = document.getElementById('audio1PlayButton');

  audio1PlayButton.addEventListener('click', () => {
    if (audio1.paused) {
      audio1.play();
      audio1PlayButton.innerHTML = 'Stop';
    } else {
      audio1.pause();
      audio1PlayButton.innerHTML = 'Play';
    }
  });

  const audio4 = document.getElementById('audio4');
  const audio4PlayButton = document.getElementById('audio4PlayButton');

  audio4PlayButton.addEventListener('click', () => {
    if (audio4.paused) {
      audio4.play();
      audio4PlayButton.innerHTML = 'Stop';
    } else {
      audio4.pause();
      audio4PlayButton.innerHTML = 'Play';
    }
  });

  // const notes = document.getElementsByClassName('note');
  // console.log('HTMLCollection', notes);

  // for (let index = 0; index < notes.length; index++) {
  //   const note = notes[index];
  //   console.log(note.dataset.note);
  // }

  initPiano();
});
