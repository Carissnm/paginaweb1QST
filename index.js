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

d.addEventListener('submit', e => {
    e.preventDefault();
    (function(){
        emailjs.init("4WV3hRQjtgKVVHUgN");
    })();

    let params = {
        sendername: document.querySelector("#senderName").value,
        subject: "Nuevo Mensaje",
        replyto: document.querySelector("#replyTo").value,
        message: document.querySelector("#message").value

    };

    let serviceID = "1qst";
    let templateID = "template_h7vxtag";

    emailjs.send(serviceID, templateID, params).then(res => {
        alert("Su mensaje fue enviado con éxito");
    }).catch();
})

