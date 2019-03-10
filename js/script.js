//ПЕРЕМЕННЫЕ ДЛЯ ПОПАБА ПИСЬМА В INDEX
var buttonCallLetterElemet = document.getElementById('button-call-letter');
var allModulLetter = document.getElementById('all-modul-letter');
var allModulLetterCloseButton = document.getElementById('modul-close-catalog');

//ПЕРЕМЕННЫЕ ДЛЯ КАРТЫ В INDEX
var linksCallMapElement = document.getElementById('links-call-map');
var allModulMap = document.getElementById('all-modul-map');
var allModulMapCloseButton = document.getElementById('modul-close-catalog-map');

//ПЕРЕМЕННЫЕ ДЛЯ ПОПАБА ПРАЙСА В КАТАЛОГЕ
var buyItem = document.querySelector('.button-buy');
var modulPrice = document.querySelector('.modul-price');
var closePrice = document.querySelector('.modul-close-catalog');
var countinuehopping = document.querySelector('.modul-button-price');

//КОД ПИСЬМА В INDEX
if (buttonCallLetterElemet) {
  buttonCallLetterElemet.addEventListener('click', function(e) {
    allModulLetter.classList.toggle('all-modul-letter_hidden');
  })
}

if (allModulLetterCloseButton) {
  allModulLetterCloseButton.addEventListener('click', function(event) {
    event.preventDefault();
    allModulLetter.classList.toggle('all-modul-letter_hidden');
  })
}

//КОД ДЛЯ КАРТЫ В INDEX
if (linksCallMapElement) {
  linksCallMapElement.addEventListener('click', function(evnt) {
    event.preventDefault();
    allModulMap.classList.toggle('all-modul-map_hidden');
  })
}

if (allModulMapCloseButton) {
  allModulMapCloseButton.addEventListener('click', function(eventt) {
    event.preventDefault();
    allModulMap.classList.toggle('all-modul-map_hidden');
  })
}


//КОД ДЛЯ БЕГУНКА..НЕ ГОТОВЫЙ
var inputRangeElement = document.querySelector('input[type="range"]');
var resultRangePrice = document.querySelector('.resulr-range-price-second');

if (inputRangeElement) {
  inputRangeElement.addEventListener('input', function(event) {

    if (resultRangePrice) {
      resultRangePrice.innerHTML = event.target.value;
    }
  })
}
//КОД ДЛЯ ПОПАБА ПРАЙС МЕНЮ
document.addEventListener('click', function(event) {
  if (event.target.className === 'button-buy') {
    event.preventDefault();
    modulPrice.classList.add('modul-price_hidden');
  }
})

if (closePrice) {
  closePrice.addEventListener('click', function(event) {
    event.preventDefault();
    modulPrice.classList.remove('modul-price_hidden')
  })

}
if (countinuehopping) {
  countinuehopping.addEventListener('click', function(event) {
    event.preventDefault();
    // TODO: ДОБАВИТЬ ИЗМЕНЕНИЕ ЦВЕТА КОРЗИНЫ  + ДОБАВЛЕНИ ЕКОЛ-ВА ТОВАРА
    modulPrice.classList.remove('modul-price_hidden')
  })
}
//КОД ДЛЯ СЛАЙДЕРА
var next = document.querySelector('.gallery-button-next');
var back = document.querySelector('.gallery-button-back');
var slide = document.querySelector('.slider-content-2');

if (next) {
  next.addEventListener('click', function(event) {
    event.preventDefault();
    slide.classList.add('slider-content-2_hidden');
  })
}
if (back) {
  back.addEventListener('click', function(event) {
    event.preventDefault();
    slide.classList.remove('slider-content-2_hidden');
  })
}
