
const gameBoard = document.querySelector(".game-board");


const updateBoardSize = (gridSize) => {

gameBoard.replaceChildren(); // clears board

gameBoard.style.setProperty("--gridSize", gridSize)
    
// for loop to creates grid
let totalSquares = gridSize * gridSize;

for(let i = 0; i < totalSquares; i++){
// create squares in game box
const newSquare = document.createElement('div');
newSquare.classList.add("square")
newSquare.id = `sq${i}`
gameBoard.appendChild(newSquare)

console.log(i)
}


}

document.getElementById("submit").onclick = () => {

    let userInput = document.getElementById("user-input").value
    
    let gameSize = parseInt(userInput);

    if(isNaN(gameSize) || gameSize < 1 || gameSize > 100){
        alert("Please enter a number between 1 and 100");
        return;
    }
    // let inputSize = 20;
    updateBoardSize(gameSize)
}

const selectedSquare = document.get


