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
var closePrice = document.getElementById('modul-close-catalog-price-index');
var countinuehopping = document.querySelector('.modul-button-price');

//ПЕРМЕННЫЕ ДЛЯ СЛАЙДЕРА В INDEX
var next = document.querySelector('.gallery-button-next');
var back = document.querySelector('.gallery-button-back');
var slide = document.querySelector('.slider-content-2');


//КОД ДЛЯ ПОПАБА ПРАЙС МЕНЮ
document.addEventListener('click', function(event) {
  if (event.target.className === 'button-buy') {
    event.preventDefault();
    modulPrice.classList.add('hidden');
  }
})

closePrice.addEventListener('click', function(event) {
  event.preventDefault();
  modulPrice.classList.remove('hidden')
});


countinuehopping.addEventListener('click', function(event) {
  event.preventDefault();
  modulPrice.classList.remove('hidden')
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modulPrice.classList.contains('hidden')) {
      modulPrice.classList.remove('hidden');
    }
  }
});


//КОД ДЛЯ СЛАЙДЕРА

if (next) {
  next.addEventListener('click', function(event) {
    event.preventDefault();
    slide.classList.add('slider-content-2_hidden');
  });
}
if (back) {
  back.addEventListener('click', function(event) {
    event.preventDefault();
    slide.classList.remove('slider-content-2_hidden');
  });
}

//КОД ПИСЬМА В INDEX
if (buttonCallLetterElemet) {
  buttonCallLetterElemet.addEventListener('click', function(e) {
    e.preventDefault();
    allModulLetter.classList.add('hidden');
  });

  allModulLetterCloseButton.addEventListener('click', function(event) {
    event.preventDefault();
    allModulLetter.classList.remove('hidden');
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (allModulLetter.classList.contains('hidden')) {
        allModulLetter.classList.remove('hidden');
      }
    }
  });
}


//КОД ДЛЯ КАРТЫ В INDEX
if (linksCallMapElement) {
  linksCallMapElement.addEventListener('click', function(evnt) {
    event.preventDefault();
    allModulMap.classList.add('hidden-map');
  });
}

if (allModulMapCloseButton) {
  allModulMapCloseButton.addEventListener('click', function(eventt) {
    event.preventDefault();
    allModulMap.classList.remove('hidden-map');
  });
}


window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (allModulMap.classList.contains('hidden-map')) {
      allModulMap.classList.remove('hidden-map');
    }
  }
});
