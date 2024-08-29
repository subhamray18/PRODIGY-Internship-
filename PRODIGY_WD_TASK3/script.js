const board = document.getElementById('board');
const message = document.getElementById('message');
const resetButton = document.getElementById('resetButton');

let currentPlayer = 'X';
let boardState = ['','','','','','','','',''];

function createBoard() {
    board.innerHTML = '';
    boardState.forEach((cell, index) => {
        const div = document.createElement('div');
        div.className = 'cell';
        div.textContent = cell;
        div.addEventListener('click', () => handleClick(index));
        board.appendChild(div);
    });
}

function handleClick(index) {
    if (boardState[index] === '' && !checkWinner()) {
        boardState[index] = currentPlayer;
        createBoard();
        if (checkWinner()) {
            message.textContent = `${currentPlayer} wins!`;
        } else if (boardState.every(cell => cell !== '')) {
            message.textContent = `It's a draw!`;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            message.textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c];
    });
}

function resetGame() {
    boardState = ['','','','','','','','',''];
    currentPlayer = 'X';
    message.textContent = `Player ${currentPlayer}'s turn`;
    createBoard();
}

resetButton.addEventListener('click', resetGame);

createBoard();
