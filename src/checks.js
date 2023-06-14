function checkIsMoveLegal(piece, startRow, startCol, endRow, endCol) {
  // Check if the start and end positions are within the chessboard
  if (
    startRow < 0 || startRow > 7 ||
    startCol < 0 || startCol > 7 ||
    endRow < 0 || endRow > 7 ||
    endCol < 0 || endCol > 7
  ) {
    return false;
  }

  // Determine the type of the piece (assuming lowercase for black and uppercase for white)
  const pieceType = piece.toLowerCase();

  // Check the legality of the move based on the piece type
  switch (pieceType) {
    case 'p': // Pawn
      // Assuming pawns only move forward and capture diagonally
      const direction = piece === 'p' ? 1 : -1; // 1 for black pawns, -1 for white pawns
      if (
        startCol === endCol && // Moving straight
        (endRow - startRow) === direction && // Moving one square forward
        root.position[endRow][endCol] === '' // Destination is an empty square
      ) {
        return true;
      }
      else if (
        startCol === endCol && // Moving straight
        (endRow - startRow) === direction*2 && // Moving one square forward
        root.position[endRow][endCol] === '' && // Destination is an empty square
        ( (startRow == 1 && direction == 1) || (startRow == 6 && direction == -1) )
        ) {
        return true;
      } else if (
        Math.abs(endCol - startCol) === 1 && // Moving diagonally
        (endRow - startRow) === direction && // Moving one square forward
        root.position[endRow][endCol] !== '' // Destination has a piece to capture
      ) {
        return true;
      }
      break;
    case 'r': // Rook
      if (
        (startRow === endRow || startCol === endCol) && // Moving in a straight line
        checkIsPathClear(startRow, startCol, endRow, endCol) // No obstructions along the path
      ) {
        return true;
      }
      break;
    case 'b': // Bishop
      if (
        Math.abs(startRow - endRow) === Math.abs(startCol - endCol) && // Moving diagonally
        checkIsPathClear(startRow, startCol, endRow, endCol) // No obstructions along the path
      ) {
        return true;
      }
      break;
    case 'q': // Bishop
      if (
        (startRow === endRow || startCol === endCol) && // Moving in a straight line
        checkIsPathClear(startRow, startCol, endRow, endCol) // No obstructions along the path
      ) {
        return true;
      }
      if (
        Math.abs(startRow - endRow) === Math.abs(startCol - endCol) && // Moving diagonally
        checkIsPathClear(startRow, startCol, endRow, endCol) // No obstructions along the path
      ) {
        return true;
      }
      break;
    case 'n': // Bishop
      if(Math.abs(startCol - endCol) == 2 && Math.abs(startRow - endRow) == 1 ||
      Math.abs(startRow - endRow) == 2 && Math.abs(startCol - endCol) == 1) {
        return true;
      }
      break;
    case 'k': // King
      if(Math.abs(startCol - endCol) == 1 || Math.abs(startRow - endRow) == 1) {
        return true;
      }
      break;
    default:
      return false; // Unknown piece type
  }

  return false; // If no conditions were met, the move is illegal
}

// Helper function to check if the path between two squares is clear
function checkIsPathClear(startRow, startCol, endRow, endCol) {
  let rowStep = 0;
  let colStep = 0;

  if (startRow == endRow){
    rowStep = 0;
  }
  else if (startRow < endRow){
    rowStep = 1;
  }
  else{
    rowStep = -1
  }

  if (startCol == endCol){
    colStep = 0;
  }
  else if (startCol < endCol){
    colStep = 1;
  }
  else{
    colStep = -1
  }

  let row = startRow + rowStep;
  let col = startCol + colStep;

  while (row !== endRow || col !== endCol) {
    if (root.position[row][col] !== '') {
      return false; // Path is obstructed by another piece
    }

    row += rowStep;
    col += colStep;
  }

  return true; // Path is clear
}

function checkIsCorrectPieceSelect(piece){
  return root.turn == getPieceColor(piece);
}

function checkIsEnemyPiece(piece){
  return getPieceColor(piece) !== root.turn
}