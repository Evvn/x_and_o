console.log('x and o by the weeknd');

var p1 = ''
var p2 = ''
var xBttn = document.querySelector('.x-bttn')
var oBttn = document.querySelector('.o-bttn')
var selectIcon = document.querySelector('.select-icon')
var gameSquares = document.querySelectorAll('.square')

// add event listeners to buttons
selectIcon.addEventListener('click', function(e){
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
  setTimeout(function(){
    selectIcon.classList.add('hide')
  },1000)
}
