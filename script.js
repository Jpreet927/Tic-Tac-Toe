let tiles = document.querySelectorAll('.tile');
let board = document.getElementById('board');
let resultText = document.querySelector('.results');
let rematchBtn = document.querySelector('.rematch-btn')

let playerMove = 'X';
let computerMove = 'O';
let arrTiles = Array.from(tiles);
let numMoves = 0;
let availMoves = [0, 0, 0,
                  0, 0, 0,
                  0, 0, 0];

resultText.innerText = "";

tiles.forEach(tile => {    
    tile.addEventListener('mouseover', () => {
        if (availMoves[tile.id] === 0) {
            if (numMoves % 2 === 0){
                tile.classList.add('x-choose');
            } else {
                tile.classList.add('o-choose');
            }
        }
    })

    tile.addEventListener('mouseout', () => {
        if (numMoves % 2 === 0){
            tile.classList.remove('x-choose');
        } else {
            tile.classList.remove('o-choose');
        }
    })

    tile.addEventListener('click', () => {
        if (availMoves[tile.id] === 0) {
            let div = document.createElement("div");
            let img = document.createElement("img");

            if (numMoves % 2 === 0) {
                div.classList.add("choiceX");
                img.src = "./images/X.png";

                div.appendChild(img);
                tile.appendChild(div);

                availMoves[tile.id] = "x";

            } else if (numMoves % 2 === 1) {
                div.classList.add("choiceO");
                img.src = "./images/O.png";

                div.appendChild(img);
                tile.appendChild(div);

                availMoves[tile.id] = "o";
            }
        }
        console.log(tile.id);
        console.log(availMoves);
        numMoves++;
        checkPlayerWon();
    })
    
})

rematchBtn.addEventListener('click', () => {
    availMoves = [0, 0, 0,
                  0, 0, 0,
                  0, 0, 0];
    numMoves = 0;
    board.classList.remove("over");
    rematchBtn.style.visibility = "hidden";
    resultText.innerText = "";
    tiles.forEach(tile => {
        tile.innerHTML = "";
    })
})

function checkPlayerWon() {
    if ((availMoves[0] === "x" && availMoves[1] === "x" && availMoves[2] === "x") || 
        (availMoves[0] === "x" && availMoves[3] === "x" && availMoves[6] === "x") || 
        (availMoves[0] === "x" && availMoves[4] === "x" && availMoves[8] === "x") || 
        (availMoves[1] === "x" && availMoves[4] === "x" && availMoves[7] === "x") ||
        (availMoves[2] === "x" && availMoves[5] === "x" && availMoves[8] === "x") ||
        (availMoves[3] === "x" && availMoves[4] === "x" && availMoves[5] === "x") ||
        (availMoves[1] === "x" && availMoves[4] === "x" && availMoves[7] === "x") ||
        (availMoves[2] === "x" && availMoves[5] === "x" && availMoves[8] === "x") ||
        (availMoves[2] === "x" && availMoves[4] === "x" && availMoves[6] === "x")) {
            console.log('player x won');
            board.classList.add("over");
            resultText.innerText = "Player X has won!";
            rematchBtn.style.visibility = "visible";

    } else if ((availMoves[0] === "x" && availMoves[1] === "x" && availMoves[2] === "x") || 
        (availMoves[0] === "o" && availMoves[3] === "o" && availMoves[6] === "o") || 
        (availMoves[0] === "o" && availMoves[4] === "o" && availMoves[8] === "o") || 
        (availMoves[1] === "o" && availMoves[4] === "o" && availMoves[7] === "o") ||
        (availMoves[2] === "o" && availMoves[5] === "o" && availMoves[8] === "o") ||
        (availMoves[3] === "o" && availMoves[4] === "o" && availMoves[5] === "o") ||
        (availMoves[1] === "o" && availMoves[4] === "o" && availMoves[7] === "o") ||
        (availMoves[2] === "o" && availMoves[5] === "o" && availMoves[8] === "o") ||
        (availMoves[2] === "o" && availMoves[4] === "o" && availMoves[6] === "o")) {
            console.log('player o won');
            board.classList.add("over");
            resultText.innerText = "Player O has won!";
            rematchBtn.style.visibility = "visible";
    } else if (!(availMoves.includes(0))) {
        board.classList.add("over");
        resultText.innerText = "It's a draw!";
        rematchBtn.style.visibility = "visible";
    }
}