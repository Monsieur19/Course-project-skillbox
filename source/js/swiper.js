const swiperGaleryDesktop = new Swiper('.gallery__swiper--desktop', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 34,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 34,
    },
    1270: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  }
});

const swiperGaleryMobile = new Swiper('.gallery__swiper--mobile', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperProject = new Swiper('.project__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  loop: true,

  navigation: {
    nextEl: '.project__swiper-button-next',
    prevEl: '.project__swiper-button-prev',
  },

  breakpoints: {
    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
    1270: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 40,
    },
    1570: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  }
});

const elSwiperEvent = document.querySelector('.event__swiper-container');
let swiperEvent;

function mobileSwiper() {
  if(window.innerWidth <= 576 && elSwiperEvent.dataset.mobile == 'false') {
    swiperEvent = new Swiper('.event__swiper-container', {
      loop: true,
    
      pagination: {
        el: '.event__swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    elSwiperEvent.dataset.mobile = 'true';
    swiperEvent.update();
  }

  if (window.innerWidth > 576) {
    elSwiperEvent.dataset.mobile = 'false';

    if (elSwiperEvent.classList.contains('swiper-container-initialized')) {
      swiperEvent.destroy();
    }
  }
}

const elSwiperEdition = document.querySelector('.edition__swiper');
let swiperEdition;

function desktopSwiper() {
  if(window.innerWidth > 576 && elSwiperEdition.dataset.mobile == 'false') {
    swiperEdition = new Swiper('.edition__swiper', {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
      loop: true,
    
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      breakpoints: {
        1025: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        }
      }
    });

    elSwiperEdition.dataset.mobile = 'true';
  }

  if (window.innerWidth <= 576) {
    elSwiperEdition.dataset.mobile = 'false';

    if (elSwiperEdition.classList.contains('swiper-container-initialized')) {
      swiperEdition.destroy();
    }
  }
}

mobileSwiper();
desktopSwiper();

window.addEventListener('resize', () => {
  desktopSwiper();
  mobileSwiper();
});
