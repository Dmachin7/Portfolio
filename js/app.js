const matrix = document.querySelector('.matrix')
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"



matrix.onmouseover = event => {
    let iterations = 0

    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if(index < iterations) {
            if (event.target.dataset.value !== event.target.innerText) {
                return event.target.dataset.parent[index] 
            }
    
        } 
        return letters[Math.floor(Math.random() * 26)]
        }).join("") 

        if(iterations >= event.target.dataset.value.length){
            clearInterval(interval)
        }

    iterations += 1 / 2

  }, 50)
}

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navBar = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  navBar.classList.toggle('active')
})

window.onscroll(() => {
    navbarLinks.classList.toggle('active')
    navBar.classList.toggle('active')
})

