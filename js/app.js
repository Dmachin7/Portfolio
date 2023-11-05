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
const backToTop = document.getElementsByClassName('top2')[0]
const innerContainer = document.getElementsByClassName('inner-container')[0]
const innerDiv = document.getElementsByClassName('inner')[0]
const innerDiv2 = document.getElementsByClassName('inner')[1]
const innerDiv3 = document.getElementsByClassName('inner')[2]
const innerContainer2 = document.getElementsByClassName('inner-container')[1]
const innerContainer3 = document.getElementsByClassName('inner-container')[2]

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) { 
            $('#back-to-top').fadeIn()
        } else {
            $('#back-to-top').fadeOut()
        }
    });

    $('#back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800)
        return false
    })
})

innerDiv.addEventListener('click', () => {
    innerContainer.classList.toggle('display')
})

innerDiv2.addEventListener('click', () => {
    innerContainer2.classList.toggle('display')
})
innerDiv3.addEventListener('click', () => {
    innerContainer3.classList.toggle('display')
})
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    navBar.classList.toggle('active')
    backToTop.classList.toggle('show')
  })
  
  navbarLinks.addEventListener('click', () => {
      navbarLinks.classList.toggle('active')
      navBar.classList.toggle('active')
  })
  
  const lockScroll = () => {
      document.body.classList.toggle('lock-scroll')
  }
  