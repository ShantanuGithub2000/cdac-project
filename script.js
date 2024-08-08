const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
const checkWin = () => {
 const winPatterns = [
 [0, 1, 2],
 [3, 4, 5],
 [6, 7, 8],
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8],
 [0, 4, 8],
 [2, 4, 6],
 ];
 return winPatterns.some(pattern => {
 const [a, b, c] = pattern;
 return cells[a].textContent && cells[a].textContent === cells[b].textContent &&
cells[a].textContent === cells[c].textContent;
 });
};
const handleClick = (e) => {
 const cell = e.target;
 if (!cell.textContent) {
 cell.textContent = currentPlayer;
 if (checkWin()) {
 setTimeout(() => alert(`${currentPlayer} wins!`), 10);
 cells.forEach(cell => cell.removeEventListener('click', handleClick));
 } else {
 currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
 }
 }
};
cells.forEach(cell => cell.addEventListener('click', handleClick));
