import Swiper, { Pagination, Navigation} from 'swiper';
import './index.scss'

const headerMobile= require('../images/headerMobile.png')
const headerDesktop = require('../images/header.png')

const text = document.querySelector('.service__text')
const size1023 = window.matchMedia('(max-width: 1023px)')
const size767 = window.matchMedia('(max-width: 767px)')
const headerImg = document.querySelector('.header__img')
const menuButton = document.querySelector('.header__menu')
const iphoneBack= document.querySelector('.iphoneback');
const box = document.querySelector('.menu_box')
const iphnBtn =document.querySelector('.iphone-btn')
const iphone = document.querySelector('.iphone')
const appleButton = document.querySelector('.apple_button');
const appleMenu = document.querySelector('.apple');
const backButton = document.querySelector('.menu__box-title');
const menu = document.querySelector('.menu');
const menuCloseButton = Array.from(document.querySelectorAll('.menu__close'));
menuCloseButton.forEach((item => item.addEventListener('click', menuCloseHandler)))

function size1024() {
  if(size1023.matches) {
    text.textContent = 'Ремонт планшетов в Челябинске. Бесплатно продиагностируем и быстро починим любую поломку'
  } else {
  text.textContent ="Ремонт планшетов в Челябинске. Бесплатно продиагностируем и быстро починим любую поломку. Гарантия 3 месяца."
  }
}
function size768px() {
  if(size767.matches) {
    headerImg.src = headerMobile
  } else {
    headerImg.src = headerDesktop
  }
}
function menuHandler() {
  menu.classList.add('menu_opened')
}
function menuCloseHandler() {
  menu.classList.remove('menu_opened')
}
function menuBoxClosed() {
  box.classList.add('box')
  appleMenu.classList.remove('box')
  iphone.classList.add('box')
}

function backToMenu() {
  box.classList.remove('box')
  appleMenu.classList.add('box')
  iphone.classList.add('box')
}

function openIphone() {
  appleMenu.classList.add('box');
  box.classList.add('box');
  iphone.classList.remove('box')
}
function backToApple() {
  appleMenu.classList.remove('box')
  iphone.classList.add('box');
}
iphoneBack.addEventListener('click', backToApple)
iphnBtn.addEventListener('click', openIphone)
backButton.addEventListener('click', backToMenu)
appleButton.addEventListener('click', menuBoxClosed)
menuButton.addEventListener('click', menuHandler)
size768px()
size1024()
Swiper.use([Pagination, Navigation]);
const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 3
    },

    375: {
      slidesPerView: 1
    }
  }
});
