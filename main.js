// import { tsParticles } from "tsparticles-engine";
let d = document;
let body = d.querySelector('body');
let moon = d.querySelector('.moon');
let sun = d.querySelector('.sun');
let side = d.querySelector('.describtion-side');

moon.addEventListener('click', ()=>{
    sun.classList.toggle('light')
    moon.classList.toggle('light')
    side.classList.toggle('black')
    body.style.background = "radial-gradient(circle, #212529, #4E1DB7)";
})
sun.addEventListener('click', ()=>{
    sun.classList.toggle('light')
    moon.classList.toggle('light')
    side.classList.toggle('black')
    body.style.background = "#f2f2f2";
})
