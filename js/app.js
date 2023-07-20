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

const compLink = document.querySelector('#companyLink')
const whiteArrow = document.querySelector('#whiteArrow')
const comp = document.querySelector('.company')

compLink.addEventListener('click', () => {
      comp.classList.toggle('active')
      whiteArrow.classList.toggle('active')
})


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





