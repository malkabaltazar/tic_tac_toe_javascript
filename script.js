"use strict";

const gameBoard = (() => {
  let board = [null, null, null, null, null, null, null, null, null];
  const render = () => {
    let div = document.getElementById("board");
    for (let i = 0; i < 9; i++) {
      div.childNodes[i * 2 + 1].innerHTML = board[i];
    };
  };
  const reset = () => {
    for (let i = 0; i < 9; i++) {
      board[i] = null;
    };
    render();
  };
  return { board, render, reset };
})();

const Player = (letter) => {
  const play = (i) => {
    if (gameBoard.board[i] == null) {
      gameBoard.board[i] = letter;
      gameBoard.render();
      if (game.won(letter) == true) {
        alert(letter + ' wins!');
        game.newGame();
      } else if (!gameBoard.board.includes(null)) {
        alert('Cat\'s game!');
        game.newGame();
      } else {
        player == x ? player = o : player = x;
      };
    };
  };
  return { letter, play };
}

const game = (() => {
  const won = (letter) => {
    if (gameBoard.board[0] == letter) {
      if (gameBoard.board[1] == letter && gameBoard.board[2] == letter) {
        return true;
      } else if (gameBoard.board[3] == letter && gameBoard.board[6] == letter) {
        return true;
      } else if (gameBoard.board[4] == letter && gameBoard.board[8] == letter) {
        return true;
      };
    }
    if (gameBoard.board[4] == letter) {
      if (gameBoard.board[3] == letter && gameBoard.board[5] == letter) {
        return true;
      } else if (gameBoard.board[1] == letter && gameBoard.board[7] == letter) {
        return true;
      } else if (gameBoard.board[2] == letter && gameBoard.board[6] == letter) {
        return true;
      };
    }
    if (gameBoard.board[8] == letter) {
      if (gameBoard.board[2] == letter && gameBoard.board[5] == letter) {
        return true;
      } else if (gameBoard.board[6] == letter && gameBoard.board[7] == letter) {
        return true;
      };
    }
    return false;
  };
  const newGame = () => {
    gameBoard.reset();
    player = x;
  };
  return { won, newGame };
})();

const x = Player('x');
const o = Player('o');
let player = x
