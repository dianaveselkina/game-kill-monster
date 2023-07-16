const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 0
let score = 0

startBtn.addEventListener('click', (event) =>{
  event.preventDefault()
screens[0].classList.add('up')
})
timeList.addEventListener('click', event =>{
if(event.target.classList.contains('time-btn')){
  time = parseInt(event.target.getAttribute('data-time'))
  screens[1].classList.add('up') 
  startGame()
}
})

board.addEventListener('click', event => {
if (event.target.classList.contains('monster')){
  score++
  event.target.remove()
  createRandomMonster()
}
})
function startGame() {
 setInterval(decreaseTime, 1000)
 createRandomMonster()
 setTime (time)
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  }else{
    let current =--time
    if (current < 10) {
      current = `0${current}`
     }
  setTime (current)
}
}
function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}

function finishGame() {
  timeEl.parentNode.classList.add('hide')
board.innerHTML =`<h1>Cчет: <span class="primary">${score}</span></h1>`
}

function createRandomMonster(){
  const monster = document.createElement('div')
  const size = getRandomNumber(50,100)
  const {width, height} = board.
  getBoundingClientRect()
  const x = getRandomNumber(0, width-size)
  const y = getRandomNumber(0, height-size)

  monster.style.width = `${size}px`
  monster.style.height = `${size}px`
  monster.style.top = `${y}px`
  monster.style.left = `${x}px`
  monster.classList.add('monster')
 
  
  board.append(monster)
}
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max-min) + min)
}


