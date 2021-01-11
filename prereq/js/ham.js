function toggleNav() {
  const body = document.body;
  const hum = document.getElementById('target');
  const black = document.getElementById('js-black');
  const menus = document.getElementsByClassName('menu1');

  hum.addEventListener('click', () => {
    body.classList.toggle('nav-open');
  });
  black.addEventListener('click', () => {
    body.classList.remove('nav-open');
  });
  for(let i= 0; i < menus.length; i++){
    menu = menus[i] ;
    menu.addEventListener('click', () => {
      body.classList.remove('nav-open');
    })
  }
} 
toggleNav();

