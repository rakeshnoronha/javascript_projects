let count = 0

const btns = document.querySelectorAll('.btn')
const value = document.getElementById('value')

console.log(btns)

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.className.includes('decrease')) {
      count--
    } else if (btn.className.includes('increase')) {
      count++
    } else {
      count = 0
    }
    value.textContent = count
    count > 0
      ? (value.style.color = 'green')
      : count < 0
      ? (value.style.color = 'red')
      : (value.style.color = 'black')
  })
})
