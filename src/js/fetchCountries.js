import countryDescriptionTpl from '../templates/countryDescription.hbs'

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
            if (countries.length === 1) {
                return description.insertAdjacentHTML('beforeend', countryDescriptionTpl(...countries));
            } if (countries.length > 1 & countries.length < 10) {
                countries.forEach(country => {
                    markUp += `<li class="country">${country.name}</li>`;
                    list.insertAdjacentHTML('beforeend', markUp);
                    return markUp = '';
                })
            }
        })
        .catch(error =>
            console.log(error));
};