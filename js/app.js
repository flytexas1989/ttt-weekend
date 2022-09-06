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
const playerX = 1
const playerO = -1

/*---------------------------- Variables (state) 
----------------------------*/

let squares, turn, winner, T, turnCount


/*------------------------ Cached Element References ------------------------*/

const message = document.querySelector('#message')
const squares = document.querySelectorAll('.squares')
const resetBtn = document.querySelector('#reset')



/*----------------------------- Event Listeners -----------------------------*/

allSquares.forEach(square => square.addEventListener('click', handleClick )) 
  
resetBtn.addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  board = [
    null, null, null, 
    null, null, null, 
    null, null, null]
    turn = 1
  playerX = 1
  playerO = -1 
  winner = null
  counter = 0
  render()
  resetBtn.setAttribute("hidden", true)
  message.textContent = "Tic Tac Toe"
}

function handleClick (event) {
  const index = event.target.id.replace('sq', '')
  if (squares[index] !== null){
    return
  }
  squares[index] = turn
  if (turn === 1) { 
    message = "Sailor O, you're up!"
  } else if (turn === -1) {
    message = "Sailor X, you're up!"
  }
  turn *= -1 
  turnCount += 1
  checkWinner()
  render()
  squares.classList.remove("hidden")
    }

function render() {
  message.textContent = message
  for (let i = 0; i < squares.length; i++) {
    if(squares[i] === 1) {
      squares[i].textContent = "X";
    } else if (squares[i] === -1) {
      squares[i].textContent = "O"
    } else if (squares[i] === null) {
      squares[i].textContent = ""
    }
  }
}

function isWinner(){
  winningCombos.forEach((winningCombo) => {
    if(Math.abs(squares[winningCombo[0]] + squares[winningCombo[1]] + squares[winningCombo[2]]) === 3){
    winner = 1
    message = "I am Sailor X, I am def...TUXEDO MASK <3 * HE'S SO DREAMY *"
    } else if(Math.abs(squares[winningCombo[0]] + squares[winningCombo[1]] + squares[winningCombo[2]]) === -3){
    winner = -1
    message = "I am Sailor O, defender of Tic Tac Toe. I wright the wrongs of evil, and that means you!"
    }
    else if (turnCount === 9){
    winner = 'T'
    message = "C'mon we can't let evil win! Let's go again!"
    }
  })
  }

  render()

