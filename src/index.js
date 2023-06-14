 // Get the canvas element
 const canvas = document.getElementById('chessboard');
 const ctx = canvas.getContext('2d');

 // Call the drawChessboard function to draw the initial chessboard
 root.canvas = canvas;
 root.ctx =ctx;
 drawChessboard(ctx,canvas);
 placePieces(ctx,canvas);
 addUserInput(canvas);