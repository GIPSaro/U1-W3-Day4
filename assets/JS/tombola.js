function generateTombolaBoard() {
  const board = document.getElementById("tombola-board");
  let counter = 1;

  for (let i = 0; i < 4; i++) {
    const row = document.createElement("tr");
    for (let i = 0; i < 19; i++) {
      let cell = document.createElement("td");
      cell.textContent = counter++;
      row.appendChild(cell);
    }
    board.appendChild(row);
  }
}

generateTombolaBoard();
