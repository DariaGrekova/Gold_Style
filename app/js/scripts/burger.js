export function burgerMenu() {

  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.navigation');

  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('_active');
    menu.classList.toggle('_active');
    //bg.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('_active') ? 'hidden' : '';
  })

  const header = document.querySelector('.header');
  if(window.innerWidth < 1056) {
    window.addEventListener('scroll', () => {
      if(window.pageYOffset > 0) {
        header.classList.add('fixed');
      } else {
        header.classList.remove('fixed');
      }
    })
  }
}