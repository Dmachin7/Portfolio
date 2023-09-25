const matrix = document.querySelector('.matrix')
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
matrix.onmouseover = event => {
    let iterations = 0

    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if(index < iterations) {
            if (event.target.dataset.value !== event.target.dataset.parent) {
                return event.target.dataset.parent[index]
            }
    
        }
        return letters[Math.floor(Math.random() * 26)]
        }).join("") 
        if(iterations >= event.target.dataset.value.length){
            clearInterval(interval)
        }

    iterations += 1 / 3
  }, 50)
}