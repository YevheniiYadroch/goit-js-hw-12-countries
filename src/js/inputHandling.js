import fetchCountries from './fetchCountries';
// import {debounce as _debounce } from 'lodash/debounce';
// import * as _debounce from 'lodash/debounce';
import * as _ from 'lodash'; 
const input = document.querySelector('input');

function inputHandler() {
    _.debounce(fetchCountries(input.value), 500);
};



input.addEventListener('input', inputHandler);