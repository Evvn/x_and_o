console.log('thank you :)\n-Evan');

var p1 = ''
var p2 = ''
var turnOf = 1
var xBttn = document.querySelector('.x-bttn')
var oBttn = document.querySelector('.o-bttn')
var selectIcon = document.querySelector('.select-icon')
var gameBoard = document.querySelector('.board')
var gameSquares = document.querySelectorAll('.square')
var replayIcon = "<button class='replay'><i class='fas fa-redo'></i></button>"
var replayBttn = document.querySelector('.replay')

// function to show game board
function showGameBoard() {
  gameSquares.forEach(function(square) {
    // if board is hidden, fade it in
    if (square.classList.value === 'square hide') {
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

// fade and then hide icon selection
function hideSelectIcon() {
  selectIcon.classList.add('fade')
  setTimeout(function() {
    selectIcon.innerHTML = ''
  }, 1000)
  showGameBoard()
}

// fade all squares without winning icon and display replay button
function winFade(icon) {
  for (var i = 0; i < gameSquares.length; i++) {
    if (gameSquares[i].textContent !== icon) {
      gameSquares[i].classList.add('fade')
    }
  }
  selectIcon.classList.remove('fade')
  selectIcon.innerHTML = replayIcon
}

function rowWin(icon) {
  for (var i = 0; i < 9; i += 3) {
    if (gameSquares[i].textContent !== '' && gameSquares[i].textContent === gameSquares[i + 1].textContent && gameSquares[i].textContent === gameSquares[i + 2].textContent) {
      winFade(icon)
    }
  }
}

function columnWin(icon) {
  for (var i = 0; i <= 2; i++) {
    if (gameSquares[i].textContent !== '' && gameSquares[i].textContent === gameSquares[i + 3].textContent && gameSquares[i].textContent === gameSquares[i + 6].textContent) {
      winFade(icon)
    }
  }
}

function diagonalWin(icon) {
  for (var i = 0; i <= 2; i += 2) {
    if (gameSquares[i].textContent !== '' && gameSquares[i].textContent === gameSquares[4].textContent && gameSquares[i].textContent === gameSquares[8 - i].textContent) {
      winFade(icon)
    }
  }
}

function draw() {
  drawCheck = []
  for (var i = 0; i < gameSquares.length; i++) {
    if (gameSquares[i].textContent !== '') {
      drawCheck.push(gameSquares[i])
    }
  }
  if (drawCheck.length === 9) {
    selectIcon.classList.remove('fade')
    selectIcon.innerHTML = replayIcon
  }
}

// function to check if move triggers win
function checkIfWin(icon) {
  // check for row wins
  rowWin(icon)
  // check for column wins
  columnWin(icon)
  // check diagonal
  diagonalWin(icon)
  // check draw
  draw()
}

// fade in body
setTimeout(function() {
  document.querySelector('body').classList.remove('fade')
}, 200)

// hide gameboard until icon is selected
showGameBoard()

// add event listeners to buttons
selectIcon.addEventListener('click', function(e) {
  if (e.target.className === 'icon' && e.target.parentNode.className !== 'select-icon fade' && gameSquares[0].className === 'square hide') {
    hideSelectIcon()
    // set player 1 to selected icon
    p1 = e.target.textContent
    if (p1 === 'x') {
      p2 = 'o'
    } else {
      p2 = 'x'
    }
  } else if (e.target.className === 'replay' || e.target.className === 'fas fa-redo') {
    // reset button click
    p1 = ''
    p2 = ''
    turnOf = 1
    selectIcon.innerHTML = "<button class='icon'>x</button> or <button class='icon'>o</button>"
    gameSquares.forEach(function(square) {
      square.innerHTML = ''
      square.className = 'square'
      square.classList.add('fade')
      setTimeout(function() {
        square.classList.add('hide')
        square.classList.remove('fade')
      },1000)
    })
  } else {
    return;
  }
})

// add event listeners to board squares
gameBoard.addEventListener('click', function(e) {
  // check if click is on a board square
  if (e.target.classList.value === 'square') {
    // make sure square is empty
    if (e.target.textContent === '') {
      // check which players turn it is
      if (turnOf % 2 === 1) {
        // place players icon
        e.target.textContent = p1
        // fade in player move
        e.target.classList.add('show-text')
        checkIfWin(p1)
      } else {
        e.target.textContent = p2
        e.target.classList.add('show-text')
        checkIfWin(p2)
      }
      // next turn
      turnOf++
    } else {
      // not empty square, exit function
      return;
    }
  } else {
    // not square click, exit function
    return;
  }
})
