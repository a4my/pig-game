'use strict'

// Modal button

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

const openModal = function() {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeModal = function() {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

for(let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal)
  btnCloseModal.addEventListener('click', closeModal)
  overlay.addEventListener('click', closeModal)
}

document.addEventListener('keydown', function(e) {
  // console.log(e.key)

  if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})

// Selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

//Starting conditions
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

const scores = [0, 0]
let currentScore = 0
let activePlayer = Math.trunc(Math.random() * 2)

if(activePlayer === 0) {
  player0El.classList.add('player--active')
} else {
  player1El.classList.add('player--active')
}

//Rolling dice functionality
btnRoll.addEventListener('click', function() {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1
  // 2. Display dice
  diceEl.classList.remove('hidden')
  diceEl.src = `images/side-${dice}.png`
  // 3. Check for rolled 1, if true, switch to next player
  if(dice !== 1) {
    currentScore += dice
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
  }
})

// Holding score functionality
btnHold.addEventListener('click', function() {
  // 1. Add current score to active player's score

  // 2. Check if player's score is >= 100
  // Finish the game
  
  // Switch to the next player
  
})