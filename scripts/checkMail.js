'use strict';

let mailInput = document.getElementById('emailVerify');
let submitButton = document.getElementById('emailButton');
let allSection = document.getElementsByTagName('section');
let footerBlock = document.getElementsByTagName('footer');
let succesfullyWindow = document.querySelector('.succesfully-window');
let confirmButton = document.getElementById('confirm');
let signUpBtn = document.querySelector('.sign-up');
let mailForm = document.querySelector('.email-verify');
let regexEmail = /([a-z0-9_-])+@([a-z0-9])+\.([a-z])+$/;

function isEmail(value) {
    return regexEmail.test(value);
}

submitButton.addEventListener('click', (e) => {
    
    if(isEmail(mailInput.value)) {
        e.preventDefault();
        mailForm.style.border = '1px solid green';
        allSection[0].classList.add('blur-window');
    allSection[1].classList.add('blur-window');
    allSection[2].classList.add('blur-window');
    allSection[3].classList.add('blur-window');
    allSection[4].classList.add('blur-window');
    allSection[5].classList.add('blur-window');
    allSection[6].classList.add('blur-window');
    footerBlock[0].classList.add('blur-window');
    succesfullyWindow.style.display = 'flex';
    } else {
        mailForm.style.border = '1px solid red';
    }

});



signUpBtn.addEventListener('click', () => {
    signUpBtn.style.display = 'none';
    mailForm.style.display = 'flex';
});


confirmButton.addEventListener('click', () => {
    allSection[0].classList.remove('blur-window');
    allSection[1].classList.remove('blur-window');
    allSection[2].classList.remove('blur-window');
    allSection[3].classList.remove('blur-window');
    allSection[4].classList.remove('blur-window');
    allSection[5].classList.remove('blur-window');
    allSection[6].classList.remove('blur-window');
    footerBlock[0].classList.remove('blur-window');
    succesfullyWindow.style.display = 'none';
    signUpBtn.style.display = 'block';
    mailForm.style.display = 'none';
});

