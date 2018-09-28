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
window.recursiveFunction = function(board, row, n, callback, validator) {
  
  if (n === row) {
    callback();
    return;
  }
  
  for (var i = 0; i < n; i++) {
    board.togglePiece(row, i);
    
    if (!board[validator]()) {
      recursiveFunction(board, row + 1, n, callback, validator);
    }
    board.togglePiece(row, i);
  }
  
};



window.findNRooksSolution = function(n) {

  var solution = undefined; //fixme
  
  var board = new Board({"n": n});
  
  recursiveFunction(board, 0, n, function() {
    solution = _.map(board.rows(), function(row) {
      return row.slice();
    });
  }, "hasAnyRooksConflicts");

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // debugger;
  //creating a board of size n
  var solutionCount = 0;
  
  var board = new Board({'n': n});
  recursiveFunction(board, 0, n, function() {
    solutionCount++;
  }, "hasAnyRooksConflicts");
  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme
  
  var board = new Board({'n': n});
  
  
  recursiveFunction(board, 0, n, function() {
    solution = _.map(board.rows(), function(row) {
      return row.slice();
    });
  }, "hasAnyQueensConflicts");
  
  if (solution === undefined) {
    solution = {"n": n};
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
 
  var board = new Board({'n': n});
  
  recursiveFunction(board, 0, n, function() {
    solutionCount++;
  }, "hasAnyQueensConflicts");
  
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
