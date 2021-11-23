const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const giveaway = document.querySelector('.giveaway')

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 00)

const fYear = futureDate.getFullYear()
const fMonth = months[futureDate.getMonth()]
const fDay = weekdays[futureDate.getDay()]
const fDate = futureDate.getDay()
const fHour = futureDate.getHours()
const fMin = futureDate.getMinutes()
const fSec = futureDate.getSeconds()

giveaway.innerHTML = `Giveaway ends on ${fDay} ${fDate} ${fMonth} ${fYear}, ${fHour}:${fMin}am`

//Calculate the countdown and display
const deadline = document.querySelectorAll('.deadline-format h4')
console.log(deadline)

function getCoutdown() {
  const currentDate = new Date()
  let t = currentDate.getTime()
  const ft = futureDate.getTime()

  const oneSec = 1000
  const oneMin = 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneDay = 24 * 60 * 60 * 1000

  const diffTime = ft - t
  let dayDiff = Math.floor(diffTime / oneDay)
  let hoursDiff = Math.floor((diffTime % oneDay) / oneHour)
  let minDiff = Math.floor((diffTime % oneHour) / oneMin)
  let secDiff = Math.floor((diffTime % oneMin) / oneSec)

  const values = [dayDiff, hoursDiff, minDiff, secDiff]

  function format(item) {
    if (item < 10) {
      return `0${item}`
    }
    return item
  }

  const deadlineParent = document.querySelector('.deadline')
  console.log()

  if (diffTime < 0) {
    clearInterval(countDown)
    deadlineParent.innerHTML = 'Sorry, the give away is no more available'
  } else {
    deadline.forEach((item, index) => {
      item.innerHTML = format(values[index])
    })
  }
}

const countDown = setInterval(getCoutdown, 1000)
