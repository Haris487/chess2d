window.root = {
  position : [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
  ],
  selectedPiece : null,
  turn : 'white',
  squareSize : null,
  ctx : null,
  canvas : null,
  castel : {
    black : {
      OO : true,
      OOO : true
    },
    white : {
      OO : true,
      OOO : true
    }
  }

}