// import "./public/scss/style.scss";
//import "./style.scss";

const slides = document.querySelectorAll('.slider-items__slide')
const prevBtn = document.querySelector('.slider-nav__prev')
const nextBtn = document.querySelector('.slider-nav__next')

const sliderItems = document.querySelector('.slider-items')

const bulletsContainer = document.querySelector('.slider-bullets')

let activeSlide = 0


prevBtn.onclick = function(e) {
    e.preventDefault()
    if(activeSlide == 0) activeSlide = slides.length
    activeSlide--
    showSlide()
}

nextBtn.onclick = function(e) {
    e.preventDefault()
    activeSlide++
    if(activeSlide == slides.length) activeSlide = 0
    showSlide()
}

for(let i = 0; i < slides.length; i++) {
    bulletsContainer.innerHTML += '<a href="#"></a>'
}

const bullets = bulletsContainer.querySelectorAll('a')

bullets.forEach((bullet, index) => {

    bullet.onclick = function(e) {
        e.preventDefault()
        activeSlide = index
        showSlide()
    }

})

function showSlide() {
    if(document.querySelector('.slider-items__slide.active')) {
        document.querySelector('.slider-items__slide.active').classList.remove('active')
    }
    slides[activeSlide].classList.add('active')

    if(bulletsContainer.querySelector('a.active')) {
        bulletsContainer.querySelector('a.active').classList.remove('active')
    }
    bullets[activeSlide].classList.add('active')
}

showSlide()


let tabs = document.querySelectorAll('.portfolio__tabs-item');
let tabContent = document.querySelectorAll('.slide__element');
let tabFrontEnd = document.querySelectorAll('.front-end');
let tabGraphD = document.querySelectorAll('.graph-d');


function addShowTag () {
    for (let i=0; i<tabContent.length; i++){
        tabContent[i].classList.add('show');
    }
}
addShowTag();

function hideGraphDNav (a) {
    for(let i =a; i< tabGraphD.length; i++){
        tabGraphD[i].classList.remove("show");
        tabGraphD[i].classList.add("hide");
    }
}
function hideFrontEndNav (a) {
    for(let i =a; i< tabFrontEnd.length; i++){
        tabFrontEnd[i].classList.remove("show");
        tabFrontEnd[i].classList.add("hide");
    }
}

tabs.onclick = function (event) {
    let target = event.target;
    if(target.className == ".front-end"){
        for(let i=0; i<tabs.length; i++){
            hideGraphDNav(i);
        }
    }
}
// tabNavs.forEach((nav, i) => {
//     nav.onclick = function(event) {
//         event.preventDefault()
//         if(!this.classList.contains('active')) {
//             document.querySelector('.portfolio .portfolio__slider .slider .slider-items slider-items__slide.active').classList.remove('active')
//             this.classList.add('active')
//             document.querySelector('.portfolio .portfolio__slider .slider .slider-items slider-items__slide.active').classList.remove('active')
//             tabContents[i].classList.add('active')
//         }
//     }

// })


/* HEADER */
const burger = document.getElementById('burger-menu');
const menu = document.getElementById('main-menu');
const header = document.getElementById('header-nav');

const toggleMenu = () => {
    menu.classList.toggle('open');
    header.classList.toggle('open');
}
burger.addEventListener('click', toggleMenu);