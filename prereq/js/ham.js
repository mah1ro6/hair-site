function toggleNav() {
  const body = document.body;
  const hum = document.getElementById('target');
  const black = document.getElementById('js-black');

  hum.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  black.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
} 
toggleNav();