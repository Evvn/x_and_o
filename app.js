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

// function to check if move triggers win
function checkIfWin(icon) {
  // check for row wins
  if (gameSquares[0].textContent != '' && gameSquares[0].textContent === gameSquares[1].textContent && gameSquares[0].textContent === gameSquares[2].textContent) {
    // console.log(icon + ' row 1 win');
    for (var i = 0; i < gameSquares.length; i++) {
      if (gameSquares[i].textContent != icon) {
        gameSquares[i].classList.add('fade')
      }
    }
  } else if (gameSquares[3].textContent != '' && gameSquares[3].textContent === gameSquares[4].textContent && gameSquares[3].textContent === gameSquares[5].textContent) {
    // console.log(icon + ' row 2 win');
    for (var i = 0; i < gameSquares.length; i++) {
      if (gameSquares[i].textContent != icon) {
        gameSquares[i].classList.add('fade')
      }
    }
  } else if (gameSquares[6].textContent != '' && gameSquares[6].textContent === gameSquares[7].textContent && gameSquares[6].textContent === gameSquares[8].textContent) {
    // console.log(icon + ' row 3 win');
    for (var i = 0; i < gameSquares.length; i++) {
      if (gameSquares[i].textContent != icon) {
        gameSquares[i].classList.add('fade')
      }
    }
  }
  // check column
  else if (gameSquares[0].textContent != '' && gameSquares[0].textContent === gameSquares[3].textContent && gameSquares[0].textContent === gameSquares[6].textContent) {
    // console.log(icon + ' column 1 win');
    for (var i = 0; i < gameSquares.length; i++) {
      if (gameSquares[i].textContent != icon) {
        gameSquares[i].classList.add('fade')
      }
    }
  } else if (gameSquares[1].textContent != '' && gameSquares[1].textContent === gameSquares[4].textContent && gameSquares[1].textContent === gameSquares[7].textContent) {
    // console.log(icon + ' column 2 win');
    for (var i = 0; i < gameSquares.length; i++) {
      if (gameSquares[i].textContent != icon) {
        gameSquares[i].classList.add('fade')
      }
    }
  } else if (gameSquares[2].textContent != '' && gameSquares[2].textContent === gameSquares[5].textContent && gameSquares[2].textContent === gameSquares[8].textContent) {
    // console.log(icon + ' column 3 win');
    for (var i = 0; i < gameSquares.length; i++) {
      if (gameSquares[i].textContent != icon) {
        gameSquares[i].classList.add('fade')
      }
    }
  }
  // check diagonal
  else if (gameSquares[0].textContent != '' && gameSquares[0].textContent === gameSquares[4].textContent && gameSquares[0].textContent === gameSquares[8].textContent) {
    // console.log(icon + ' diagonal backslash win');
    for (var i = 0; i < gameSquares.length; i++) {
      if (gameSquares[i].textContent != icon) {
        gameSquares[i].classList.add('fade')
      }
    }
  } else if (gameSquares[2].textContent != '' && gameSquares[2].textContent === gameSquares[4].textContent && gameSquares[2].textContent === gameSquares[6].textContent) {
    // console.log(icon + ' diagonal slash win');
    for (var i = 0; i < gameSquares.length; i++) {
      if (gameSquares[i].textContent != icon) {
        gameSquares[i].classList.add('fade')
      }
    }
  }
}

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
      console.log('not empty square')
      return;
    }
  } else {
    // not square click, exit function
    return;
  }
})
