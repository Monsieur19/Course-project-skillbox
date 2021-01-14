const btnEventShowAll = document.querySelector('.event__btn-show-all');
const listEvent = document.querySelector('.event__list');
const btnContactForm = document.querySelector('.contact__btn-order');
const eventSwiper = document.querySelector('.event__swiper-container');

btnEventShowAll.addEventListener('click', (ev) => {
    listEvent.classList.add("active");
    btnEventShowAll.classList.add('visually-hidden');
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

// document.querySelector('.edition__category').addEventListener('click', (ev) => {
//   console.log(ev.target.nodeName);
//   const target = ev.target;
//   if (target.nodeName === 'SPAN') {
//     target.parentNode.classList.toggle('active');
//   } else if (target.nodeName === 'LABEL') {
//     target.classList.toggle('active');
//   }
// })

// document.querySelector('.edition__category legend').addEventListener('click', (ev) => {
//   ev.target.classList.toggle('active');
//   ev.target.parentNode.classList.toggle('active');
//   ev.target.parentNode.parentNode.classList.toggle('active');
// })
