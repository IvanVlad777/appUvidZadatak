const result = document.querySelector('#result');
const input = document.querySelector('#userInput');
const alert = document.querySelector('#alert');

const returnIndex = (inputValue) => {
  const inputArray = inputValue
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map(Number);

  for (i = 0; i < inputArray.length; i++) {
    //Zbroj cijelog niza bez indeksa koji trenutno ispitujemo
    let arraySum =
      inputArray.reduce(function (a, b) {
        return a + b;
      }, 0) - inputArray[i];

    // Polovica od sume mora biti cijeli broj, ako jest tada možemo početi ispitivati imaju li obje polovice ovih nizova jednaku sumu

    if (
      (arraySum / 2) % 1 === 0 &&
      inputArray.slice(0, i).reduce(function (a, b) {
        return a + b;
      }, 0) ===
        inputArray.slice(i + 1).reduce(function (a, b) {
          return a + b;
        }, 0)
    ) {
      return i;
    }
  }
  return null;
};

const resultMessage = (message, bcgColor) => {
  result.innerHTML = message;
  result.style.backgroundColor = bcgColor;
};

input.addEventListener('keyup', () => {
  const regexForNumbers = /^[0-9\s]*$/;

  if (input.value.match(regexForNumbers)) {
    alert.innerHTML = '';
    input.style.backgroundColor = 'white';

    returnIndex(input.value)
      ? resultMessage(returnIndex(input.value), '#B0FFCE')
      : resultMessage('Navedeni niz nema odgovarajući indeks!', '#FDF8F1');
  } else {
    alert.innerHTML = 'Oprez! Unijeli ste znak koji nije znamenka!';
    input.style.backgroundColor = '#FFC8C8';
    resultMessage('Nisu uneseni isključivo brojevi!', '#FFC8C8');
  }
});
