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
  var board = new Board({'n': n});
  var recursiveFunc = function(board, row) { 
    var result;
    if (n === row) {
      return board.rows();
    }
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyRooksConflicts()) {
        result = recursiveFunc(board, row + 1);
      }
      if (result) {
        return result;
      }
      board.togglePiece(row, col);
    }
  };
  var solution = recursiveFunc(board, 0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({'n': n });
  var row = 0;
  
  var recursiveFunc = function () {
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(row, col);
      } else {
        if (countPieces(board.rows()) === n) {
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
        }
      }
    }
  };
  recursiveFunc();
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({'n': n});
  var recursiveFunc = function(board, row) { 
    var result;
    if (n === row) {
      return board.rows();
    }
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyQueensConflicts()) {
        result = recursiveFunc(board, row + 1);
      }
      if (result) {
        return result;
      }
      board.togglePiece(row, col);
    }
  };
  var solution = recursiveFunc(board, 0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  if (solution === undefined) {
    solution = new Board({'n': n}).rows();
  }
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({'n': n});
  var row = 0;
  if (n === 0) {
    return 1;
  }
  
  var recursiveFunc = function () {
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (board.hasAnyQueensConflicts()) {
        board.togglePiece(row, col);
      } else {
        if (countPieces(board.rows()) === n) {
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
        }
      }
    }
  };
  
  recursiveFunc();

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

var countPieces = function (array) {
  var counter = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[i][j] === 1) {
        counter++;
      }
    }
  }
  return counter;
};
