const tabBtns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', (e) => {
  const id = e.target.dataset.id
  console.log(id)

  if (id) {
    //Remove active class from all the buttons
    tabBtns.forEach((btn) => {
      btn.classList.remove('active')
      e.target.classList.add('active')
    })
    articles.forEach((article) => {
      article.classList.remove('active')
    })
    const element = document.getElementById(id)
    element.classList.add('active')
  }
})
