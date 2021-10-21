const colorsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.getElementById('btn')
const bgcolor = document.querySelector('.color')

btn.addEventListener('click', () => {
  let randomColor = '#'
  for (let i = 0; i < 6; i++) {
    randomColor += colorsList[randomNumber()]
  }
  document.body.style.backgroundColor = randomColor
  bgcolor.textContent = randomColor
})

const randomNumber = function () {
  return Math.floor(Math.random() * colorsList.length)
}
