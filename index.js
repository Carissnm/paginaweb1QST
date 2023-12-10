import { validate } from "./validaciones.js";
const closeBar = document.querySelector('.close');
const slideBar = document.querySelector('.lista-navbar');
const openBar = document.querySelector('.dropdown-lista');
const inputs = document.querySelectorAll('input');
const d = document;
const anio = document.getElementById('year');

d.addEventListener('DOMContentLoaded', getYear());
closeBar.onclick = closeSlideBar;
openBar.onclick = openSlideBar;


function closeSlideBar() {
    if(!slideBar.classList.contains('hide')) {
        slideBar.classList.add('hide');
    }
}

function openSlideBar() {
    if(slideBar.classList.contains('hide')) {
        slideBar.classList.remove('hide');
    }
}

inputs.forEach( input => {
    input.addEventListener('blur', (input) => {
        validate(input.target);
    })
});

function getYear() {
    const date = new Date();
    const year = date.getFullYear();
    anio.innerHTML = ` ${year} `;  
}

