/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = []; 
  var counter = 0;
  var board = new Board({'n': n });
  
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      board.togglePiece(i, j);
      counter++;
      if (!board.hasAnyRooksConflicts() && counter === n) {
        solution = board.rows();
      } else if (board.hasAnyRooksConflicts()) {
        board.togglePiece(i, j);
        counter--;
      }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({'n': n });
  //debugger;
  var counter = 0;
  var row = 0;
  
  
  var recursiveFunc = function () {


    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      
      
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(row, col);
      } else {
        counter++;
        if (counter === n) {
          solutionCount++;
          board.togglePiece(row, col);
          return;
        } else {
          row++;
          if (row === n) {
            return;
          }
          recursiveFunc();
          row--;
          board.togglePiece(row, col);
          counter--;
        }
      }
      
      
    }
    
    // for (row; row < n; row ++) {
    //   for (col; col < n; col++) {
    //     board.togglePiece(row, col);
    //     counter++;
    //     if (board.hasAnyRooksConflicts()) {
    //       return;
    //     } else if (counter === n) {
    //       solutionCount++;
    //     }
    //     if (col < n - 1 ) {
    //       recursiveFunc(board, row, col++);
    //     } else {
    //       recursiveFunc(board, row++);
    //     }
        
    //   }
    // }
  };
  
  recursiveFunc();
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
