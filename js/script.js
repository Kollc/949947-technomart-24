var buttonCallLetterElemet = document.getElementById('button-call-letter');
var allModulLetter = document.getElementById('all-modul-letter');
var allModulLetterCloseButton = document.getElementById('modul-close-catalog');
var allModulLetterCloseButtonMap = document.getElementById('modul-close-catalog-map');

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
if (allModulLetterCloseButtonMap) {
  allModulLetterCloseButtonMap.addEventListener('click', function(event) {
    event.preventDefault();
    allModulLetterMap.classList.toggle('all-modul-letter-map_hidden');
  })
}
//

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
