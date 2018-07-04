console.log('x and o by the weeknd');

var p1 = ''
var p2 = ''
var turnOf = 1
var xBttn = document.querySelector('.x-bttn')
var oBttn = document.querySelector('.o-bttn')
var selectIcon = document.querySelector('.select-icon')
var gameBoard = document.querySelector('.board')
var gameSquares = document.querySelectorAll('.square')

// fade in body
setTimeout(function() {
  document.querySelector('body').classList.remove('fade')
}, 200)

// function to show game board
function showGameBoard() {
  gameSquares.forEach(function(square) {
    // if board is hidden, fade it in
    if (square.classList.value === 'square hide') {
      console.log('fade board in')
      square.classList.remove('hide')
      square.classList.add('fade')
      setTimeout(function() {
        square.classList.remove('fade')
      }, 1000)
    } else {
      square.classList.add('hide')
    }
  })
}

// hide gameboard until icon is selected
showGameBoard()

// add event listeners to buttons
selectIcon.addEventListener('click', function(e) {
  if (e.target.type === "submit") {
    hideSelectIcon()
    // set player 1 to selected icon
    p1 = e.target.textContent
    if (p1 === 'x') {
      p2 = 'o'
    } else {
      p2 = 'x'
    }
  } else {
    return;
  }
})

// fade and then hide icon selection
function hideSelectIcon() {
  selectIcon.classList.add('fade')
  setTimeout(function() {
    selectIcon.innerHTML = ''
  }, 1000)
  showGameBoard()
}

// add event listeners to board squares
gameBoard.addEventListener('click', function(e) {
  if (e.target.classList.value === 'square') {
    console.log('square click')
    // make sure square is empty
    if (e.target.textContent === '') {
      console.log('empty square')
      // check which players turn it is
      if (turnOf % 2 === 1) {
        // place players icon
        console.log('player 1')
        e.target.textContent = p1
        // fade in player move
        e.target.classList.add('show-text')
      } else {
        console.log('player 2')
        e.target.textContent = p2
        e.target.classList.add('show-text')
      }
      // next turn
      turnOf++
    } else {
      console.log('not empty square')
      return;
    }
  } else {
    console.log('not square click')
    return;
  }
})
