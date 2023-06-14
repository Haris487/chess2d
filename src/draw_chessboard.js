// Function to draw the chessboard
function drawChessboard() {
  const ctx = root.ctx;
  const canvas = root.canvas;

   // Define the size of each square
 root.squareSize = canvas.width / 8;
 const squareSize = root.squareSize;

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      // Calculate the position of each square
      const x = col * squareSize;
      const y = row * squareSize;

      // Set the color of each square
      ctx.fillStyle = (row + col) % 2 === 0 ? 'yellow' : 'gray';

      // Draw the square
      ctx.fillRect(x, y, squareSize, squareSize);
    }
  }
}