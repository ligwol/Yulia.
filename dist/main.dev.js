"use strict";

// import "./public/scss/style.scss";
//import "./style.scss";
var slides = document.querySelectorAll('.slider-items__slide');
var prevBtn = document.querySelector('.slider-nav__prev');
var nextBtn = document.querySelector('.slider-nav__next');
var sliderItems = document.querySelector('.slider-items');
var bulletsContainer = document.querySelector('.slider-bullets');
var activeSlide = 0;

prevBtn.onclick = function (e) {
  e.preventDefault();
  if (activeSlide == 0) activeSlide = slides.length;
  activeSlide--;
  showSlide();
};

nextBtn.onclick = function (e) {
  e.preventDefault();
  activeSlide++;
  if (activeSlide == slides.length) activeSlide = 0;
  showSlide();
};

for (var i = 0; i < slides.length; i++) {
  bulletsContainer.innerHTML += '<a href="#"></a>';
}

var bullets = bulletsContainer.querySelectorAll('a');
bullets.forEach(function (bullet, index) {
  bullet.onclick = function (e) {
    e.preventDefault();
    activeSlide = index;
    showSlide();
  };
});

function showSlide() {
  if (document.querySelector('.slider-items__slide.active')) {
    document.querySelector('.slider-items__slide.active').classList.remove('active');
  }

  slides[activeSlide].classList.add('active');

  if (bulletsContainer.querySelector('a.active')) {
    bulletsContainer.querySelector('a.active').classList.remove('active');
  }

  bullets[activeSlide].classList.add('active');
}

showSlide();
var tabs = document.querySelectorAll('.portfolio__tabs-item');
var tabContent = document.querySelectorAll('.slide__element');
var tabFrontEnd = document.querySelectorAll('.front-end');
var tabGraphD = document.querySelectorAll('.graph-d');

function addShowTag() {
  for (var _i = 0; _i < tabContent.length; _i++) {
    tabContent[_i].classList.add('show');
  }
}

addShowTag();

function hideGraphDNav(a) {
  for (var _i2 = a; _i2 < tabGraphD.length; _i2++) {
    tabGraphD[_i2].classList.remove("show");

    tabGraphD[_i2].classList.add("hide");
  }
}

function hideFrontEndNav(a) {
  for (var _i3 = a; _i3 < tabFrontEnd.length; _i3++) {
    tabFrontEnd[_i3].classList.remove("show");

    tabFrontEnd[_i3].classList.add("hide");
  }
}

tabs.onclick = function (event) {
  var target = event.target;

  if (target.className == ".front-end") {
    for (var _i4 = 0; _i4 < tabs.length; _i4++) {
      hideGraphDNav(_i4);
    }
  }
}; // tabNavs.forEach((nav, i) => {
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


var burger = document.getElementById('burger-menu');
var menu = document.getElementById('main-menu');
var header = document.getElementById('header-nav');

var toggleMenu = function toggleMenu() {
  menu.classList.toggle('open');
  header.classList.toggle('open');
};

burger.addEventListener('click', toggleMenu);