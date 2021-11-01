const colBtn = document.querySelector("#col")
const h1 = document.querySelector("#th1")
const body = document.querySelector("body")

colBtn.addEventListener("click", function() {
    // randNum = () => Math.floor(Math.random()*255)
    // I prefer this ^ over putting the Math.floor(Math.random()*255) between everything.
    // let colour = "rgb("+ randNum() + ", "+ randNum()+", "+ randNum()+")";
    /* Could also make an independent function which assigns a value using the math.random thing
     to r, g and b and then check their sum and change the colour of the h1 if it is below a certain threshod
     so that it can still be visible. */
    // Alternate way to enable the h1 colour change
    let colour, whiteNeeded;
    [colour, whiteNeeded] = randCol();
    body.style.backgroundColor = colour;
    h1.innerText = colour;
    if (whiteNeeded === true) {
        h1.style.color = "white"
    }
    else {
        h1.style.color = "black"
    }
})

// e.g.
let randCol = () => {
    let whiteNeeded = false
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    let newCol = `rgb(${r}, ${g}, ${b})`
    if ((r + g + b) < 80) {
        whiteNeeded = true
    }
    return [newCol, whiteNeeded]
}

console.log(randCol())