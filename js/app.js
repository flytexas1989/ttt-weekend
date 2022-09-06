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
const square = doucment.querySelectorAll('.square')
const message = document.getElementById('message')

const resetBtn = document.querySelector('#reset')



/*----------------------------- Event Listeners -----------------------------*/

square.forEach(square => square.addEventListener('click', handleClick )) 
  
resetBtn.addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/
//big thanks for kimberly who came to help me over the weekend. (my friend's sister, I struggled with the JS portion of this.)
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
// I looked up help with a longer version

//updated following along with ben, because mine was a mess
// function render() {
  
//   for (let i = 0; i < squares.length; i++) {
//     if(squares[i] === 1) {
//       squares[i].textContent = "X";
//     } else if (squares[i] === -1) {
//       squares[i].textContent = "O"
//     } else if (squares[i] === null) {
//       squares[i].textContent = ""
//     }
//   }
// }
funtion render() {
  board.forEach((cell, idx) ==> {
    let cellColor, cellLetter
    if (cell === 1) {
      cellColor = 'pink'
      cellLetter = 'X'
    } else if (cell === -1) {
      cellColor = 'gold'
      cellLetter = 'O'
    } else if (cell === null) {
      cellColor = '#FFB6C1'
      cellLetter = ''
    }
    square[idx].textContent = cellLetter
    square[idx].style.backgroundColor = cellColor
  })
}
//I sought out help from YouTube, our material, class, mdn, stackflow, a big thank you to michelle's sister (my friend), she helped me through my code. but I still can't get my x and o to appear.

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
//I definetly had help on this function, I could not configure this to save my life. I did research on the math.abs and with Kimberly (michelle sister) help we put together this function
  render()

