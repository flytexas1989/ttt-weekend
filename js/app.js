// # Minimum Requirements

// - Display an empty tic-tac-toe board when the page is initially displayed.
// - A player can click on the nine cells to make a move.
// - Every click will alternate between marking an `X` and `O`.
// - Once occupied with an `X` or `O`, the cell cannot be played again.
// - Provide a `Reset Game` button that will clear the contents of the board.
// - Display whose turn it is (“X” or “O”).
// - Provide win logic and display a winning message.
// - Provide logic for a cat’s game (tie), also displaying a message.



/*-------------------------------- Constants 
--------------------------------*/
const winningCombos = [
  [2, 4, 6],
  [6, 7, 8],
  [0, 4, 8],
  [3, 4, 5],
  [2, 5, 8],
  [1, 4, 7],
  [0, 1, 2],
  [0, 3, 6]
]

/*---------------------------- Variables (state) 
----------------------------*/

let boardSquares, playerTurn, isWinner


/*------------------------ Cached Element References ------------------------*/

const message = document.querySelector('#message')
const htmlSquares = document.querySelectorAll('.squares')
const resetBtn = document.querySelector('.reset')


/*----------------------------- Event Listeners -----------------------------*/

htmlSquares.forEach(function(squares) {
  squares.addEventListener('click', handleClick)
})  
  
resetBtn.addEventListener('click', init)
resetBtn.addEventListener('mouseover', changeButton)


/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  playerTurn = 1
  boardSquares = [null, null, null, null, null, null, null, null, null]
  isWinner = null
  render()
}

function render() {
  boardSquares.forEach((cell, idx) => {
    let cellLetter
    if (boardSquares[idx] ===1) {
      cellLetter = 'X'
    } else if (boardSquares[idx] === -1) {
      cellLetter = 'O'
    } else if (boardSquares[idx] === null) {
      cellLetter = ''
    }
    htmlSquares[idx].innerHTML = cellLetter
  })
  if (!isWinner) {
    message.innerText = "Player ${playerTurn === 1 ? 'X' : 'O'}, you're up!"
  } else if (isWinner === 'T') {
    message.innerText = "That's a Cat"
  } else {
    message.innerText = "Finally! A WINNER, So proud of you ${isWinner === 1 ? 'X' : 'O'}"
  }
}
function handleClick(event) {
  let squareId =
  parseInt(event.target.Id.replace('sq', ''))
  if (boardSquares[squareId] || isWinner) {
    return
  }
  boardSquares[squareId] = playerTurn
  playerTurn *= -1
  isWinner = getWinner()
  render()
}
function getWinner() {
  if (Math.abs(boardSquares[2] + boardSquares[4] + boardSquares[6]) ===  3) return boardSquares[2] 
  if (Math.abs(boardSquares[6] + boardSquares[7] + boardSquares[8]) ===  3) return boardSquares[6]
  if (Math.abs(boardSquares[0] + boardSquares[4] + boardSquares[8]) ===  3) return boardSquares[0]
  if (Math.abs(boardSquares[3] + boardSquares[4] + boardSquares[5]) ===  3) return boardSquares[3]
  if (Math.abs(boardSquares[2] + boardSquares[5] + boardSquares[8]) ===  3) return boardSquares[2]
  if (Math.abs(boardSquares[1] + boardSquares[4] + boardSquares[7]) ===  3) return boardSquares[1]
  if (Math.abs(boardSquares[0] + boardSquares[1] + boardSquares[2]) ===  3) return boardSquares[0]
  if (Math.abs(boardSquares[0] + boardSquares[3] + boardSquares[6]) ===  3) return boardSquares[0]

  if (boardSquares.includes(null)) {
    return null
  } else {
    return 'T'
  }
}

