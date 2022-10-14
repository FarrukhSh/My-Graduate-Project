'use strict';

let scrollblock = document.getElementById('servicesScrollBlock');

let scrollControl = document.getElementsByClassName('square');

let activeSlider;
let sliderID = true;
let activeIndex = 0;

const sliderImages = [
    {
        id: 0,
        name: '2.jpg',
    },
    {
        id: 1,
        name: '1.jpg',
    },
    {
        id: 2,
        name: '3.jpg',
    },
    {
        id: 3,
        name: '4.jpg',
    },
    {
        id: 4,
        name: '5.jpg',
    },
    {
        id: 5,
        name: '6.jpg',
    },
];

for (let i = 0; i < scrollControl.length; i++) {

    scrollControl[i].addEventListener('click', () => {

        scrollControl[activeIndex].classList.remove('active');
        activeIndex = i;
        scrollControl[activeIndex].classList.add('active');

        scrollblock.style.background = `url(./images/servic/${sliderImages[activeIndex].name})`;
        scrollblock.style.backgroundRepeat = 'norepeat';
        scrollblock.style.backgroundSize = 'cover';
    });

}

let autoSlider = () => {
    scrollControl[activeIndex].classList.remove('active');

    if (activeIndex === sliderImages.length - 1) {
        activeIndex = 0;
    } else {
        activeIndex++;
    }
    scrollControl[activeIndex].classList.add('active');

    scrollblock.style.background = `url(./images/servic/${sliderImages[activeIndex].name})`;
    scrollblock.style.backgroundRepeat = 'norepeat';
    scrollblock.style.backgroundSize = 'cover';
};

activeSlider = setInterval(autoSlider, 1500);

let startStopButton = document.getElementById('startStop');

function startStopSlider() {
    if (sliderID) {
        sliderID = !sliderID;
        clearInterval(activeSlider);
        startStopButton.style.backgroundImage = "url('../images/servic/start.png')";
    } else {
        sliderID = !sliderID;
        activeSlider = setInterval(autoSlider, 1500);
        startStopButton.style.backgroundImage = "url('../images/servic/stop.png')";
    }

}

if (startStopButton.style.backgroundImage = "url('../images/servic/stop.png')") {
    startStopButton.addEventListener('click', () => {
        startStopSlider();
    });
}

