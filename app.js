'use strict'

var buttonActive = function() {
    var greeting = document.querySelector('#hello');
    greeting.classList.toggle('active');
};

var button = document.querySelector('#buttonHello');

button.addEventListener('click', buttonActive);

