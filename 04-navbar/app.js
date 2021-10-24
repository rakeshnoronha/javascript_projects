// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navBtn = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navBtn.addEventListener('click', () => {
  links.classList.toggle('show-links')
})
