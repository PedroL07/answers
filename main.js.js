// worked on this with Will Sanchez!

const imgArray = ['burger.png', 'chick.png', 'mcd.png', 'taco.png', 'wendy.png'] 
const firstImage = document.querySelector('#imgOne')
const secondImage = document.querySelector('#imgTwo')
const ThirdImage = document.querySelector('#imgThree')

let money = 1000
let addFifty = 50
let addFive = 5
let jackpot = 5000


document.querySelector('#betMin').addEventListener('click', actingBet)
document.querySelector('#betMax').addEventListener('click', actingBet)

document.querySelector('#amount').innerText = money


// create bet
// event waits for an event to occur in this case our buttons checks the value on our buttons
function actingBet(event){
    lostMoney = Number(event.target.value)
    if (money < lostMoney) {
        alert('You\'re Big Mad')
        document.querySelector('#results').innerText = " "
    } else {
        money -= lostMoney
        document.querySelector('#amount').innerText = money
        changePhotos()
    }

}
// this creates a random number to assign to each picture
function randomNumbers() {
    let oneThroughFive = Math.floor(Math.random()* 5 )
    return oneThroughFive
}
// function randomNumbers runs each time its called three times 
function changePhotos() {
    let fistNumber = randomNumbers()
    let secondNumber = randomNumbers()
    let thirdNumber = randomNumbers()

    // assigning a random number to the images
    firstImage.src=imgArray[fistNumber]
    secondImage.src=imgArray[secondNumber]
    ThirdImage.src=imgArray[thirdNumber]
    winner(fistNumber,secondNumber,thirdNumber)
}

function winner(firstNumber,secondNumber,thirdNumber) {
    if (firstNumber === secondNumber && secondNumber === thirdNumber) {
        document.querySelector('#results').innerText = 'Winner Winner Chicken Dinner'
        moneyGain()
    } else {
        document.querySelector('#results').innerText = '   try again'
    }

}
function moneyGain() {
    money += jackpot
    document.querySelector('#amount').innerText = money
}