//navBar transition




const acctBtn = document.querySelector('#acctBtn')
const acctCont = document.querySelector('.acctContents')
const arrDwn = document.querySelector('#arrDwn')
const body = document.querySelector('body')

acctBtn.addEventListener('click', () => {
      acctCont.classList.toggle('active')
      arrDwn.classList.toggle('active')

})
document.querySelectorAll('.navLinks li').forEach(n => n.addEventListener('click', () => {
      acctCont.classList.remove('active')
      arrDwn.classList.remove('active')
}))

body.addEventListener('click', () => {
      acctCont.classList.remove('active')
})

const menuBtn = document.querySelector('.menu')
const navLinks = document.querySelector('.navLinks')

menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active')
})

const compLink = document.querySelector('#companyLink')
const whiteArrow = document.querySelector('#whiteArrow')
const comp = document.querySelector('.company')

compLink.addEventListener('click', () => {
      comp.classList.toggle('active')
      whiteArrow.classList.toggle('active')
})


const popOff = document.querySelector('.popOff')
const popUp = document.querySelector('.popup')
const continueBtn = document.querySelector('#continueBtn')

setTimeout(() => {
      popOff.className = 'popup';
}, 6000);
continueBtn.addEventListener('click', () => {
      popOff.className = 'popOff';
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
// let lastScroll = 0;
// const nav = document.querySelector('.navBar')
// window.addEventListener('scroll', () => {
//       const currentScroll = window.pageYOffset;
//       if (currentScroll <= 0) {
//             body.classList.remove('scrollUp')
//       }
//       if (currentScroll >= lastScroll && !body.classList.contains('scrollDown')) {
//             body.classList.remove('scrollUp')
//             body.classList.add('scrollDown')
//       }
//       if (currentScroll <= lastScroll && body.classList.contains('scrollDown')) {
//             body.classList.add('scrollUp')
//             body.classList.remove('scrollDown')
//       }

//       lastScroll = currentScroll;

// })

// var typed = new Typed('#autoType', {
//       strings: ['Saving and Earning made easy', "Enjoy Referral Bonuses", "this is a boy"],
//       typeSpeed: 100,
//       backSpeed: 80,
//       loop: true,
// })



// let changeImg = document.querySelector('#images')
// let images = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png', 'img6.png']

// setInterval(() => {
//       let random = Math.floor(Math.random() * 6)
//       changeImg.src = `/assets/img${[random]}.png`;
// }, 3000)
// const changeImg = document.querySelector('.changeImg')

// const cImg = function (src, time) {
//       setTimeout(() => {
//             for (let i = 1; i <= 6; i++){
//                   changeImg.src = src
//             }
//       }, time)
//       return src, time
// }
// cImg(`/assets/img2.png`, 3000)
// cImg(`/assets/img3.png`, 6000)
// cImg(`/assets/img4.png`, 9000)
// cImg(`/assets/img5.png`, 12000)
// cImg(`/assets/img6.png`, 15000)





