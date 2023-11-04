const matrix = document.querySelector('.matrix')
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

let isToggled = true

matrix.onmouseover = event => {
    console.log(isToggled)

    let iterations = 0

    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {

     
        if(index < iterations) {
        
            if(isToggled) {

    
                if (event.target.dataset.value !== event.target.innerText) {
                    console.log(index)
                    return event.target.dataset.parent[index] 
                } 

            } else {
                console.log(index)
                console.log("we're at the second one")
                console.log(event.target.dataset.value)
                return event.target.dataset.value[index]
            }
            
    
        } 
        return letters[Math.floor(Math.random() * 26)]
        }).join("") 

        if(iterations >= event.target.dataset.value.length){
            clearInterval(interval)
            isToggled ? isToggled = false : isToggled = true
            iterations = 0
            console.log(isToggled)
        }

    iterations += 1

  }, 50)
}

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navBar = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  navBar.classList.toggle('active')
})

navbarLinks.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    navBar.classList.toggle('active')
})


