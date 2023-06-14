
const imageMapping = {
  "r" : "_r",
  "n" : "_n",
  "b" : "_b",
  "q" : "_q",
  "k" : "_k",
  "p" : "_p",
  "R" : "R",
  "N" : "N",
  "B" : "B",
  "Q" : "Q",
  "K" : "K",
  "P" : "P",
}

const startingPosition = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
];
function placePieces() {
  const position = root.position;
  const ctx = root.ctx;
  const canvas = root.canvas;

  // Define the size of each square
  const squareSize = root.squareSize;
  // ctx.font = "20px Arial";
  // ctx.fillStyle = "red";
  // ctx.textAlign = "center";
  // ctx.fillText("X", 25, 25);

  // placeSinglePiece("p", 25, 25, ctx, canvas)

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      // Calculate the position of each square
      const x = col * squareSize;
      const y = row * squareSize;

      // Draw the chess pieces
      const piece = position[row][col];
      if (piece !== '') {
        placeSinglePiece(piece, x, y)
      }
    }
  }

}

function placeSinglePiece(piece,x,y){
  const ctx = root.ctx;
  const canvas = root.canvas;
  const squareSize = root.squareSize;
  const image = imageMapping[piece];
  const imagePath = 'images/' + image + '.png'; // Replace with actual image paths
  const img = new Image();
  img.onload = function() {
    ctx.drawImage(img, x, y, squareSize, squareSize);
  };
  img.src = imagePath;
}