const btnBurger = document.querySelector('.header__top-burger');
const headNav = document.querySelector('.nav');
const btnEventShowAll = document.querySelector('.event__btn-show-all');
const listEvent = document.querySelector('.event__list');
const listHeaderMiddle = document.querySelector('.header__middle-list');
const allExtraMenu = document.querySelectorAll('.header__middle-extra-menu');

function dltClassActive (arr) {
  for (let i = 0; i < arr.length; i++) {
      arr[i].classList.remove('active');
  }
}

btnEventShowAll.addEventListener('click', () => {
    listEvent.classList.add("active");
    btnEventShowAll.classList.add('visually-hidden');
})

btnBurger.addEventListener('click', () => {
  headNav.classList.toggle('active');
  btnBurger.classList.toggle('active');
})

listHeaderMiddle.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'BUTTON') {
    if (ev.target.nextSibling.classList.contains('active')) {
      ev.target.nextSibling.classList.toggle('active');
    } else {
      dltClassActive(allExtraMenu);
      ev.target.nextSibling.classList.toggle('active');
    }
  }
})

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [48.87219657376512,2.354223999999991],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 17
    });

  var place = new ymaps.Placemark([48.87219657376512,2.354223999999991], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/icon.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [0, 0]
  });
  myMap.geoObjects.add(place);
}

new SimpleBar(document.querySelector('.scroll'), {
  scrollbarMaxSize: 28,
  autoHide: false,
});

new SimpleBar(document.querySelector('.scroll2'), {
  scrollbarMaxSize: 28,
  autoHide: false,
});

new SimpleBar(document.querySelector('.scroll3'), {
  scrollbarMaxSize: 28,
  autoHide: false,
});

new SimpleBar(document.querySelector('.scroll4'), {
  scrollbarMaxSize: 28,
  autoHide: false,
});

new SimpleBar(document.querySelector('.scroll5'), {
  scrollbarMaxSize: 28,
  autoHide: false,
});
