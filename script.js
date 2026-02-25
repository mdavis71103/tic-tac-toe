/* JavaScript */


/* Factories */

const gameBoard = (() => {
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

    // Array.from(board).forEach((spot) => 
    //         spot.addEventListener("click", (event) => {
    //             if(event.target.textContent === ""){
    //                 event.target.textContent = "X";
                    
    //             }
    //         })
    //     );

    function getSpots(){
        return board;
    }

    function clearBoard(){
        Array.from(board).forEach((spot) => 
            spot.textContent = ""
        );
    }

    function markSpot(mark, spot){
        board[spot].textContent = mark;
    }

    function checkForWinner(){
        arr = Array.from(board);
        const allEqual = arr => arr.every(val => val.textContent === arr[0].textContent);
        const allFilled = arr => arr.every(val => val.textContent != "");

        for (const way of waysToWin){
            if(allFilled(way) && allEqual(way)){

                console.log(way);
                return [way[0].textContent, way]
            }
        }

    }
    return {clearBoard, checkForWinner, getSpots, markSpot};
})();


function player(name, mark) {
    let score = 0;

    function incrementScore(){
        score += 1;
    }

    function getScore(){
        return score;
    }

    function getName(){
        return name;
    }

    function getMark(){
        returnMark;
    }

    return {incrementScore, getScore, getName, getMark}

}

function playGame(){

    gameOn = true;
    yourTurn = false;

    const spots = gameBoard.getSpots();
    console.log(spots);
    Array.from(spots).forEach((spot) => 
        spot.addEventListener("click", (event) => {
            if(event.target.textContent === ""){
                event.target.textContent = "X";
                gameBoard.checkForWinner();
                cpuTurn();
                gameBoard.checkForWinner();
            }
        }))



    // while(gameOn){
    //     /* 1st player turn
    //         check for winner
    //         2nd player turn
    //         check for winner
    //         */
    //     cpuTurn();
    //     gameBoard.checkForWinner();
    //     playerTurn();
    //     gameBoard.checkForWinner();
        
    // }


    function gameOver(){
        /* GameOver
            Mark Winning Area
            Alert Winner
            Increment score
            Ask to play again
        */
    }

    function cpuTurn(){
        let myTurn = true;
        while(myTurn){
            let spot = Math.floor(Math.random() * 8) + 1;
            if(spots[spot].textContent === ""){
                gameBoard.markSpot("O", spot);
                myTurn = false;
            }
            
        }

    }

    function playerTurn(){

    }
}

playGame();




