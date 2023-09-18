
function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  const img = document.querySelector('#profile img');
  html.classList.contains('light') ? img.src = './assets/avatar-light.jpg' : img.src = './assets/avatar.jpg'
}