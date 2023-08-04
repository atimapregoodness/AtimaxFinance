const body = document.querySelector('body')
let lastScroll = 50;
const nav = document.querySelector('.navBar')
window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
            body.classList.remove('scrollUp')
      }
      if (currentScroll <= lastScroll && !body.classList.contains('scrollDown')) {
            body.classList.add('scrollDown')
      }
      if (currentScroll >= lastScroll && body.classList.contains('scrollDown')) {
            body.classList.add('scrollUp')
      }

})



const menuBtn = document.querySelector('.menu')
const navLinks = document.querySelector('.navLinks')
const navBar = document.querySelector('.navBar')

menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active')
      navBar.classList.toggle('active')
})

const compLink = document.querySelector('#companyLink')
const whiteArrow = document.querySelector('#whiteArrow')
const comp = document.querySelector('.company')

compLink.addEventListener('click', () => {
      comp.classList.toggle('active')
      whiteArrow.classList.toggle('active')
})

window.addEventListener('scroll', reveal)
function reveal() {
      var reveals = document.querySelectorAll('.reveal')

      for (var i = 0; i < reveals.length; i++){
            var windowheight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 100;

            if (revealTop < windowheight - revealPoint) {
                  reveals[i].classList.add('active')
            }
            else {
                  reveals[i].classList.remove('active')
            }
      }
}

window.addEventListener('scroll', revealRight)
function revealRight() {
var reveals = document.querySelectorAll('.revealRight')
      for (var i = 0; i < reveals.length; i++){
            var windowheight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 100;

            if (revealTop < windowheight - revealPoint) {
                  reveals[i].classList.add('active')
            }
            else {
                  reveals[i].classList.remove('active')
            }
      }
}
const toTopBtn = document.querySelector('#toTopBtn')
toTopBtn.addEventListener('click', () => {
      window.location.href = '#top';
})


const popOff = document.querySelector('.popOff')
const popUp = document.querySelector('.popup')
const continueBtn = document.querySelector('#continueBtn')

setTimeout(() => {
      popOff.className = 'popup';
}, 7000);
continueBtn.addEventListener('click', () => {
      popOff.className = 'popOff';
})








// var typed = new Typed('#autoType', {
//       strings: ['Saving and Earning made easy', "Enjoy Referral Bonuses", "this is a boy"],
//       typeSpeed: 100,
//       backSpeed: 80,
//       loop: true,
// })









