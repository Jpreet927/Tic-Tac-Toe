let tiles = document.querySelectorAll('.tile');
let board = document.getElementById('board');

let playerMove = 'X';
let computerMove = 'O';
let arrTiles = Array.from(tiles);
let numMoves = 0;
let availMoves = [0, 1, 2,
                  3, 4, 5,
                  6, 7, 8]

tiles.forEach(tile => {
    
    // if (numMoves % 2 === 0){
    //     tile.addEventListener('mouseover', () => {
    //         tile.classList.add('x-choose');
    //     })

    //     tile.addEventListener('mouseout', () => {
    //         tile.classList.remove('x-choose');
    //     })

    //     tile.addEventListener('click', () => {
    //         numMoves++;
    //         tile.innerHTML = `
    //             <div class="choiceX">
    //                 <img src="./images/X.png">
    //             </div>
    //         `;
    //         console.log(numMoves);
    //     })
    // }

    // if (numMoves % 2 === 1){
        tile.addEventListener('mouseover', () => {
            tile.classList.add('o-choose');
        })

        tile.addEventListener('mouseout', () => {
            tile.classList.remove('o-choose');
        })

        tile.addEventListener('click', () => {
            numMoves++;
            tile.innerHTML = `
                <div class="choiceO">
                    <img src="./images/O.png">
                </div>
            `;
            console.log(numMoves);
        })
    
})