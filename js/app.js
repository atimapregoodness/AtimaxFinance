const acctBtn = document.querySelector('#acctBtn')
const acctCont = document.querySelector('.acctContents')
const arrDwn = document.querySelector('#arrDwn')
const body = document.querySelector('body')
acctBtn.addEventListener('click', () => {
      acctCont.classList.toggle('active')
      arrDwn.classList.toggle('active')

})
body.addEventListener('click', () => {
      acctCont.className.remove('active')
})

const menuBtn = document.querySelector('.menu')
const navLinks = document.querySelector('.navLinks')
menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active')
})

