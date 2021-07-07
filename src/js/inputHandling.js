import fetchCountries from './fetchCountries';
const input = document.querySelector('input');
import debounce from 'lodash.debounce';


function inputHandler() {
    fetchCountries(input.value);
};



input.addEventListener('input', debounce(inputHandler, 500));