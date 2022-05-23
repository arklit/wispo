import './index.scss'
const headerMobile= require('../images/headerMobile.png')
const headerDesktop = require('../images/header.png')

const text = document.querySelector('.service__text')
const size1023 = window.matchMedia('(max-width: 1023px)')
const size767 = window.matchMedia('(max-width: 767px)')
const headerImg = document.querySelector('.header__img')

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
size768px()
size1024()
