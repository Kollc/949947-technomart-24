//ПЕРЕМЕННЫЕ ДЛЯ ПОПАБА ПИСЬМА В INDEX
var buttonCallLetterElemet = document.getElementById('button-call-letter');
var allModulLetter = document.getElementById('all-modul-letter');
var allModulLetterCloseButton = document.getElementById('modul-close-catalog');

//ПЕРЕМЕННЫЕ ДЛЯ КАРТЫ В INDEX
var linksCallMapElement = document.getElementById('links-call-map');
var allModulMap = document.getElementById('all-modul-map');
var allModulMapCloseButton = document.getElementById('modul-close-catalog-map');

//ПЕРЕМЕННЫЕ ДЛЯ ПРАЙСА В КАТАЛОГЕ
var area = document.querySelector('.catalog-item');
var imgCatalog = document.querySelector('.catalog-item-img');
var menuPrice = document.querySelector('.catalog-item-buy-grid');

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


//КОД ДЛЯ ПРАЙСА В КАТАЛОГЕ

if (area) {
  area.addEventListener('mouseover', function(event) {
    //  event.preventDefault();
    imgCatalog.classList.add('catalog-item-img_hidden');
    menuPrice.classList.add('catalog-item-buy-grid_hidden');

  })

  area.addEventListener('mouseout', function(event) {
    imgCatalog.classList.remove('catalog-item-img_hidden');
    menuPrice.classList.remove('catalog-item-buy-grid_hidden');
  })
}

//КОД ДЛЯ ВАЛИКА..НЕ ГОТОВЫЙ
var inputRangeElement = document.querySelector('input[type="range"]');
var resultRangePrice = document.querySelector('.resulr-range-price');

if (inputRangeElement) {
  inputRangeElement.addEventListener('input', function(event) {
    console.dir(event.target.value);

    if (resultRangePrice) {
      resultRangePrice.innerHTML = event.target.value;
    }
  })
}
