'use strict';

let searchCity = document.querySelector('.header-search-location-city');
let searchLocation = document.querySelector('.header-search-location');
let sheduleVisit = document.querySelector('.shedule-visit-button');



searchCity.addEventListener('click', () => {
    searchLocation.className = 'header-search-location';
    sheduleVisit.className = 'shedule-visit-button';
    searchCity.classList.remove('header-search-location-city');
    searchCity.classList.add('city-click');

});

searchLocation.addEventListener('click', () => {
    searchLocation.className = '';
    searchCity.className = 'header-search-location-city';
    sheduleVisit.className = 'shedule-visit-button';
    searchLocation.className = 'location-click';
});

sheduleVisit.addEventListener('click', () => {
    sheduleVisit.className = '';
    searchLocation.className = 'header-search-location';
    searchCity.className = 'header-search-location-city';
    sheduleVisit.className = 'shedule-click';
});