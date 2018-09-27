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
  //var solution = new Board({'n': n});
  //console.log(solution.attributes);
  
  debugger;
  
  var board = new Board({'n': n });
  
  var recursiveSetRooks = function (board, row = 0, col = 0) {
    
    for (row; row < n; row++) {
      for (col; col < n; col++) {
        if (board.rows()[row][col] !== 1) {
          board.togglePiece(row, col);
        }
        if (!board.hasAnyRooksConflicts() && row === n - 1 && col === n - 1) {
          solution = board.rows();
          return;
        }
        if (!board.hasAnyRooksConflicts()) {
          if (col < n - 1) {
            recursiveSetRooks(board, row, ++col);
          } else {
            recursiveSetRooks(board, ++row);
          }
          
        }
        
      }
    }
  };
  recursiveSetRooks(board);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

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
