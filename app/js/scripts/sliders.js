export function sliders() {

  const banner = new Swiper('.banner', {
    effect: 'fade',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });

    // categories

    const categoriesSliders = document.querySelectorAll('.category-slider');
    if(categoriesSliders.length > 0) {

      categoriesSliders.forEach((slider) => {
        const categorysSlider = new Swiper(slider, {
          slidesPerView: 'auto',
          spaceBetween: 20,
          simulateTouch: false,
        })
      })
    }


  // inside tabs
  const saleSliders = document.querySelectorAll('.sale-slider');
  if(saleSliders.length > 0) {

    saleSliders.forEach((slider) => {
      const saleSlider = new Swiper(slider, {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
          nextEl: '.sale-tabs__button-next',
          prevEl: '.sale-tabs__button-prev',
        },
        simulateTouch: false,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          920: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }
      })
    })
  }

  // inside cards

  const productSliders = document.querySelectorAll('.product-slider');
  if(productSliders.length > 0) {

    productSliders.forEach((slider) => {
      const productSlider = new Swiper(slider, {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: slider.parentNode.querySelector('.product-pagination'),
          clickable: true,
        },
      })
    })
  }

  // todays product
  const todaysProductSliders = document.querySelectorAll('.card-slider');
  if(todaysProductSliders.length > 0) {
    todaysProductSliders.forEach((slider) => {
      const todaysProductSlider = new Swiper(slider, {
        slidesPerView: 1,
        navigation: {
          nextEl: '.todays-product__button-next',
          prevEl: '.todays-product__button-prev',
        }
      })
    })
  }
  // inside
  const viewProductSliders = document.querySelectorAll('.priduct-view-slider');
  if(viewProductSliders.length > 0) {
    viewProductSliders.forEach((slider) => {
      const viewProductSlider = new Swiper(slider, {
        slidesPerView: 1,
        navigation: {
          nextEl: '.simple-next-btn',
          prevEl: '.simple-prev-btn',
        },
        simulateTouch: false,
      })
    })
  }

}