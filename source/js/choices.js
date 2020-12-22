const firstSelect = document.querySelector('.galery__select-auhtor');
const secondSelect = document.querySelector('.galery__select-direction');
const thirdSelect = document.querySelector('.galery__select-technics');

const choicesFirst = new Choices(firstSelect, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
});

const choicesSecond = new Choices(secondSelect, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
});

const choicesThird = new Choices(thirdSelect, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
});
