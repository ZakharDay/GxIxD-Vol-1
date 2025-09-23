function initNote(button) {
  const audio = document.getElementById(button.dataset.note);

  button.addEventListener('click', () => {
    audio.play();
  });
}

function initNotes() {
  const notes = document.querySelectorAll('.note');

  notes.forEach((button) => {
    initNote(button);
  });
}

function initTone(button) {
  button.addEventListener('click', () => {
    const { notes } = JSON.parse(button.dataset.progression);
    const noteButtons = document.querySelectorAll('.note');

    noteButtons.forEach((note) => {
      note.classList.remove('active');
    });

    noteButtons.forEach((note) => {
      notes.forEach((noteId) => {
        if (note.dataset.note == noteId) {
          note.classList.add('active');
        }
      });
    });
  });
}

function initTones() {
  const tones = document.querySelectorAll('.tone');

  tones.forEach((button) => {
    initTone(button);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNotes();
  initTones();
});
