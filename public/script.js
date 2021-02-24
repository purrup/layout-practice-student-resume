const openMenuBtn = document.querySelector('#openMenuBtn')
const mobileMenu = document.querySelector('#mobileMenu')
const closeMenuBtn = document.querySelector('#closeMenuBtn')

openMenuBtn.addEventListener('click', () =>{
  if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.remove('hidden')
  }
})

closeMenuBtn.addEventListener('click', () =>{
  if (!mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden')
  }
})

mobileMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    mobileMenu.classList.add('hidden')
    const targetSection = e.target.attributes.href.value
    document.querySelector(targetSection).scrollIntoView({behavior: 'smooth'})
  }
})