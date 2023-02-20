export function burgerMenu() {

  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.navigation');

  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('_active');
    menu.classList.toggle('_active');
    //bg.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('_active') ? 'hidden' : '';
  })

}