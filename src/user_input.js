function handleMouseClick(event) {
  const squareSize = root.squareSize;
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Calculate the row and column of the clicked square
  const row = Math.floor(y / squareSize);
  const col = Math.floor(x / squareSize);

  // Check if a piece is already selected
  if (root.selectedPiece === null) {
    // Select the clicked piece if it's not an empty space
    selectAPiece(row,col);
  } else {
    // Deselect the piece if clicked on the same square
    if (root.selectedPiece.row === row && root.selectedPiece.col === col) {
      root.selectedPiece = null;
      reDrawChessBoard();
    } else {
      // Move the selected piece to the clicked square
      moveAPiece(row,col)
    }
  }
}

// Function to highlight the selected square
function highlightSquare(row, col) {
  const squareSize = root.squareSize;
  ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
  ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize);
}

// Add the event listener for mouse clicks
function addUserInput(canvas){
  canvas.addEventListener('click', handleMouseClick);
}

function selectAPiece(row,col){
  if (root.position[row][col] !== '') {
    const piece = root.position[row][col];
    if (!checkIsCorrectPieceSelect(piece)){
      console.error("not a correct piece", {row, col, piece});
      return;
    }
    root.selectedPiece = { row, col };
    highlightSquare(row, col);
  }
}

function moveAPiece(row, col){
  const piece = root.position[root.selectedPiece.row][root.selectedPiece.col];
  if (!checkIsMoveLegal(piece, root.selectedPiece.row, root.selectedPiece.col, row, col)){
    console.error("this move is not legal");
    return;
  }
  if ( !checkIsEnemyPiece(root.position[row][col]) && root.position[row][col] != ''){
    console.error("this move is not legal");
    return;
  }
  root.position[root.selectedPiece.row][root.selectedPiece.col] = '';
  root.position[row][col] = piece;
  root.selectedPiece = null;
  reDrawChessBoard();
  flipTurn();
}

function reDrawChessBoard(){
  drawChessboard();
  placePieces();
}

function getPieceColor(piece){
  const white = ['R','B','N','Q','K','P'].find(e => e == piece);
  const black = ['r', 'b', 'n', 'q', 'k', 'p'].find(e => e == piece);

  if (white) {
    return "white";
  }
  else if (black) {
    return "black"
  }
  else{
    console.error("piece is unknown");
  }
}

function flipTurn(){
  if (root.turn == "white"){
    root.turn = "black";
  }
  else {
    root.turn = "white"
  }
}
