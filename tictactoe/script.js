const cells = document.querySelectorAll("td");
let currentPlayer = "X";
let gameOver = false;

function reset() {
  cells.forEach(function(cell) {
    cell.textContent = "";
  });
  currentPlayer = "X";
  gameOver = false;
}

function checkWin() {
  const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for (let i = 0; i < winCombos.length; i++) {
    const [a,b,c] = winCombos[i];
    if (cells[a].textContent === currentPlayer && cells[b].textContent === currentPlayer && cells[c].textContent === currentPlayer) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  let draw = true;
  cells.forEach(function(cell) {
    if (cell.textContent === "") {
      draw = false;
    }
  });
  return draw;
}

function endGame(message) {
  alert(message);
  gameOver = true;
}

cells.forEach(function(cell) {
  cell.addEventListener("click", function() {
    if (gameOver || cell.textContent !== "") {
      return;
    }
    cell.textContent = currentPlayer;
    if (checkWin()) {
      endGame(currentPlayer + " wins!");
    } else if (checkDraw()) {
      endGame("It's a draw!");
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});
