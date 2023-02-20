/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "location": () => (/* binding */ location)
/* harmony export */ });
function location() {
  const location = document.querySelector('.location');
  if (location) {
    const selectSingle = location.querySelector('.__select');
    const selectSingle_title = location.querySelector('.__select__title');
    const selectSingle_labels = location.querySelectorAll('.__select__label');

    // Toggle menu
    selectSingle_title.addEventListener('click', () => {
      if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
      } else {
        selectSingle.setAttribute('data-state', 'active');
      }
    });

    // Close when click to option
    for (let i = 0; i < selectSingle_labels.length; i++) {
      selectSingle_labels[i].addEventListener('click', evt => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
      });
    }
  }
}

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "burgerMenu": () => (/* binding */ burgerMenu)
/* harmony export */ });
function burgerMenu() {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.navigation');
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('_active');
    menu.classList.toggle('_active');
    //bg.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('_active') ? 'hidden' : '';
  });
}

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lazyLoading": () => (/* binding */ lazyLoading)
/* harmony export */ });
function lazyLoading() {
  [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function () {
      img.removeAttribute('data-src');
    };
  });
}

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sliders": () => (/* binding */ sliders)
/* harmony export */ });
function sliders() {
  const banner = new Swiper('.banner', {
    effect: 'fade',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev'
    }
  });

  // inside tabs
  const saleSliders = document.querySelectorAll('.sale-slider');
  if (saleSliders.length > 0) {
    saleSliders.forEach(slider => {
      const saleSlider = new Swiper(slider, {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
          nextEl: '.sale-tabs__button-next',
          prevEl: '.sale-tabs__button-prev'
        },
        simulateTouch: false,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          920: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }
      });
    });
  }

  // inside cards

  const productSliders = document.querySelectorAll('.product-slider');
  if (productSliders.length > 0) {
    productSliders.forEach(slider => {
      const productSlider = new Swiper(slider, {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: slider.parentNode.querySelector('.product-pagination'),
          clickable: true
        }
      });
    });
  }

  // todays product
  const todaysProductSliders = document.querySelectorAll('.card-slider');
  if (todaysProductSliders.length > 0) {
    todaysProductSliders.forEach(slider => {
      const todaysProductSlider = new Swiper(slider, {
        slidesPerView: 1,
        navigation: {
          nextEl: '.todays-product__button-next',
          prevEl: '.todays-product__button-prev'
        }
      });
    });
  }
  // inside
  const viewProductSliders = document.querySelectorAll('.priduct-view-slider');
  if (viewProductSliders.length > 0) {
    viewProductSliders.forEach(slider => {
      const viewProductSlider = new Swiper(slider, {
        slidesPerView: 1,
        navigation: {
          nextEl: '.simple-next-btn',
          prevEl: '.simple-prev-btn'
        },
        simulateTouch: false
      });
    });
  }
}

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabs": () => (/* binding */ tabs)
/* harmony export */ });
function tabs() {
  const tabsItems = document.querySelectorAll('.js-tabs');
  const tabsContentItems = document.querySelectorAll('.js-tab-content');
  if (tabsItems.length > 0) {
    tabsContentItems[0].classList.add('_active');
    tabsItems.forEach(item => {
      const tabsButtons = item.querySelectorAll('.js-tab-btn');
      tabsButtons[0].classList.add('_active');
      for (let i = 0; i < tabsButtons.length; i++) {
        tabsButtons[i].addEventListener('click', e => {
          e.preventDefault();
          for (let i = 0; i < tabsButtons.length; i++) {
            tabsButtons[i].classList.remove('_active');
          }
          tabsButtons[i].classList.add('_active');
          const tabName = tabsButtons[i].getAttribute('data-tab');
          tabsContentItems.forEach(item => {
            item.classList.remove('_active');
            const contentName = item.getAttribute('id');
            if (contentName === tabName) {
              item.classList.add('_active');
            }
          });
        });
      }
    });
  }
}

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rating": () => (/* binding */ rating)
/* harmony export */ });
function rating() {
  const rating = document.querySelector('.rating');
  if (rating) {
    const stars = rating.querySelectorAll('.rating__star');
    stars.forEach((star, i) => {
      star.addEventListener('click', e => {
        e.preventDefault();
        let currentStarLevel = i + 1;
        stars.forEach((star, j) => {
          if (currentStarLevel >= j + 1) {
            star.classList.add('_checked');
          } else {
            star.classList.remove('_checked');
          }
        });
      });
    });
  }
}

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timer": () => (/* binding */ timer)
/* harmony export */ });
function timer() {
  class CountdownTimer {
    constructor(deadline, cbChange, cbComplete) {
      this._deadline = deadline;
      this._cbChange = cbChange;
      this._cbComplete = cbComplete;
      this._timerId = null;
      this._out = {
        hours: '',
        minutes: '',
        seconds: '',
        hoursTitle: '',
        minutesTitle: '',
        secondsTitle: ''
      };
      this._start();
    }
    static declensionNum(num, words) {
      return words[num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
    }
    _start() {
      this._calc();
      this._timerId = setInterval(this._calc.bind(this), 1000);
    }
    _calc() {
      const diff = this._deadline - new Date();
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      this._out.hours = hours < 10 ? '0' + hours : hours;
      this._out.minutes = minutes < 10 ? '0' + minutes : minutes;
      this._out.seconds = seconds < 10 ? '0' + seconds : seconds;
      this._out.hoursTitle = CountdownTimer.declensionNum(hours, ['час', 'часа', 'часов']);
      this._out.minutesTitle = CountdownTimer.declensionNum(minutes, ['минута', 'минуты', 'минут']);
      this._out.secondsTitle = CountdownTimer.declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
      this._cbChange ? this._cbChange(this._out) : null;
      if (diff <= 0) {
        clearInterval(this._timerId);
        this._cbComplete ? this._cbComplete() : null;
      }
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    const elHours1 = document.querySelector('.timer-1 .timer__hours');
    const elMinutes1 = document.querySelector('.timer-1 .timer__minutes');
    const elSeconds1 = document.querySelector('.timer-1 .timer__seconds');
    const deadline1 = new Date(Date.parse(new Date()) + 1 * 13 * 60 * 60 * 1000);
    new CountdownTimer(deadline1, timer => {
      elHours1.textContent = timer.hours;
      elMinutes1.textContent = timer.minutes;
      elSeconds1.textContent = timer.seconds;
      elHours1.dataset.title = timer.hoursTitle;
      elMinutes1.dataset.title = timer.minutesTitle;
      elSeconds1.dataset.title = timer.secondsTitle;
    }, () => {
      document.querySelector('.timer-1 .timer__result').textContent = 'Таймер завершился!';
    });
  });
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _scripts_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _scripts_lazyLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _scripts_sliders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _scripts_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _scripts_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _scripts_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);







(0,_scripts_location__WEBPACK_IMPORTED_MODULE_0__.location)();
(0,_scripts_burger__WEBPACK_IMPORTED_MODULE_1__.burgerMenu)();
(0,_scripts_lazyLoading__WEBPACK_IMPORTED_MODULE_2__.lazyLoading)();
(0,_scripts_sliders__WEBPACK_IMPORTED_MODULE_3__.sliders)();
(0,_scripts_tabs__WEBPACK_IMPORTED_MODULE_4__.tabs)();
(0,_scripts_rating__WEBPACK_IMPORTED_MODULE_5__.rating)();
(0,_scripts_timer__WEBPACK_IMPORTED_MODULE_6__.timer)();
})();

/******/ })()
;