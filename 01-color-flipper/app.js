const colorsList = ['red', 'green', 'blue']

const btn = document.getElementById('btn')
const bgcolor = document.querySelector('.color')

btn.addEventListener('click', () => {
  const randomNumber = colorsList[getRandomNumber()]
  console.log(`bg color is ${randomNumber}`)
  bgcolor.textContent = randomNumber
  document.body.style.background = randomNumber
})

const getRandomNumber = function () {
  return Math.floor(Math.random() * colorsList.length)
}
