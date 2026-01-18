const result = document.querySelector(".result")
const yourscore = document.querySelector("#yourscore")
const machinescore = document.querySelector("#machinescore")
const reaction = document.querySelector("#reaction")

const empatevalue = document.querySelector("#empatevalue")

let empatenumber = 0
let humanscorenumber = 0
let machinescorenumber = 0

const playhuman = (humanchoice) => {

    playthegame(humanchoice, playmachine())
}

const playmachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomnumber = Math.floor(Math.random() * 3)

    return choices[randomnumber]
}

const playthegame = (human, machine) => {
    console.log('humano: ' + human + ' Máquina: ' + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate!"
        reaction.src = "loled-serioused-emoji-silly-emoji.mp4"
        empatenumber++
        empatevalue.innerHTML = empatenumber
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanscorenumber++
        yourscore.innerHTML = humanscorenumber
        result.innerHTML = "Você ganhou!"
        reaction.src = "b838c81e54b62a432135e656a4d5dfcb.mp4"
    } else {
        machinescorenumber++
        machinescore.innerHTML = machinescorenumber
        result.innerHTML = "Você perdeu para a máquina!"
        reaction.src = "f14f214b3e79b325c7c0dfd5666460be.mp4"
    }
}