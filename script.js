const chores = [...document.querySelectorAll('.note input')];
const feedback = document.querySelector('.note-feedback');
const messages = ['One small thing at a time.', 'One less thing on your mind.', 'Look at you, making room.', 'All done. Go do something lovely.'];
chores.forEach((chore) => chore.addEventListener('change', () => {
  feedback.textContent = messages[chores.filter((input) => input.checked).length];
}));
