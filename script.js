/* JavaScript */


/* Factories */

const gameBoard = (() => {
    let gameOn = true;
    const board = document.getElementsByClassName("spot");

    const topRow = [board[0], board[1], board[2]];
    const midRow = [board[3], board[4], board[5]];
    const botRow = [board[6], board[7], board[8]];
    const firstCol = [board[0], board[3], board[6]];
    const secondCol = [board[1], board[4], board[7]];
    const thirdCol = [board[2], board[5], board[8]];
    const forwardDiag = [board[6], board[4], board[2]];
    const backwardDiag = [board[0], board[4], board[8]];
    const waysToWin = [topRow, midRow, botRow, firstCol, secondCol, thirdCol, forwardDiag, backwardDiag];


    Array.from(board).forEach((spot) => 
            spot.addEventListener("click", (event) => {
                event.target.textContent = "X";
            })
        );

    function displayBoard() {
        Array.from(board).forEach((spot) => 
            console.log(spot.textContent)
        );
    };

    function clearBoard(){
         Array.from(board).forEach((spot) => 
            spot.textContent = ""
        );
    }

    function playerMove(playerMark, spotNumber){
        board[spotNumber].textContent = playerMark;
    }

    function checkForWinner(){
        arr = Array.from(board);
        const allEqual = arr => arr.every(val => val.textContent === arr[0].textContent);
        const allFilled = arr => arr.every(val => val.textContent != "");

        for (const way of waysToWin){
            if(allFilled(way) && allEqual(way)){

                console.log(way);
                return console.log(`${way[0].textContent} wins!`);
                
            }
        }

    }

    return {displayBoard, clearBoard, playerMove, checkForWinner};

})();

function player(name, mark, score) {

    function win(){
        score += 1;
    }

}

function startGame(){

    //Reset board
    //Allow event listeners
    //check if game is over
    //continue with other turns
    //declare winner
    //incremnt score

}

function setup() {
    //get elements
    

    //create players
    //create board
    //reset scores?

    return function reset() {
    //clear board
    //randomize who goes first
}

}



gameBoard.clearBoard();
gameBoard.playerMove("X", 4);

