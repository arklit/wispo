import './index.scss'

const text = document.querySelector('.service__text')
const mobile = window.matchMedia('(max-width: 1023px)')

function mobileFn() {
  if(mobile.matches) {
    text.textContent = 'Ремонт планшетов в Челябинске. Бесплатно продиагностируем и быстро починим любую поломку'
  } else {
  text.textContent ="Ремонт планшетов в Челябинске. Бесплатно продиагностируем и быстро починим любую поломку. Гарантия 3 месяца."
  }
}
mobileFn()
