
function change() {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode', !document.body.classList.contains('dark-mode'));
}
