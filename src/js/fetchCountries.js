import countryDescriptionTpl from '../templates/countryDescription.hbs'
import { alert, notice, info, success, error } from '@pnotify/core';
const list = document.querySelector('.countries-list');
const description = document.querySelector('.country');
let markUp = '';

export default function fetchCountries(searchQuery) {
    fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
        .then(response => {
            return response.json();
        })
        .then(countries => {
            list.innerHTML = '';
            description.innerHTML = '';
            if (countries.length >= 10) {
                const specifyNotice = alert({
                 text: "Too many matches found. Please enter more specific query!"
                });
            } if (countries.length === 1) {
                const success = alert({
                 text: "Country found successfully!"
                });
                return description.insertAdjacentHTML('beforeend', countryDescriptionTpl(...countries));
            } if (countries.length > 1 & countries.length < 10) {
                const specifyNotice = alert({
                 text: "Too many matches found. Please enter more specific query!"
                });
                countries.forEach(country => {
                    markUp += `<li class="country-item">${country.name}</li>`;
                    list.insertAdjacentHTML('beforeend', markUp);
                    return markUp = '';
                })
            }
        })
        .catch(error =>
            console.log(error));
};