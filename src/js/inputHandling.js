import fetchCountries from './fetchCountries';
const input = document.querySelector('input');

function inputHandler() {
    _.debounce(fetchCountries(input.value), 500);
};



input.addEventListener('input', inputHandler);