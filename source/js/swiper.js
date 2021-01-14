const swiperGalery = new Swiper('.galery__swiper', {
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1025: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerGroup: 3,
      spaceBetween: 34,
    },
    1270: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  }
});

const swiperEdition = new Swiper('.edition__swiper', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 34,

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

const projectBtnPrev = document.querySelector('.project__swiper-button-prev');
const projectBtnNext = document.querySelector('.project__swiper-button-next');
const swiperProject = new Swiper('.project__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,

  navigation: {
    nextEl: '.project__swiper-button-next',
    prevEl: '.project__swiper-button-prev',
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
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

let swiperEvent = new Swiper('.event__swiper-container', {
  loop: true,

  pagination: {
    el: '.event__swiper-pagination',
    type: 'bullets',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

window.addEventListener('resize', () => {
  if (document.body.clientWidth > 640) {
    swiperEvent.destroy();
  }

  if (document.body.clientWidth < 640) {
    swiperEdition.destroy();
  }
});
