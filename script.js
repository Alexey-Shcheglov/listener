'use strict';

const btn = document.querySelector('#btn');
const inputRange = document.querySelector('#range');
const rangeSpan = document.querySelector('#range-span');
const input = document.querySelector('#text');
const square = document.querySelector('#square');
const circle = document.querySelector('#circle');
const eBtn = document.querySelector('#e_btn');


const changeColorSquare = function () {
	square.style.backgroundColor = input.value;
};


const changeSizeCircle = function () {
	circle.style.width = inputRange.value + '%';
	circle.style.height = inputRange.value + '%';
	rangeSpan.textContent = inputRange.value;
};

e_btn.style.display = 'none';

btn.addEventListener('click', changeColorSquare);
inputRange.addEventListener('change', changeSizeCircle);