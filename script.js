import createBoard from "./modules/index.js";

const gameBoard = document.querySelector(".board");

const boardCells = ["", "", "", "", "", "", "", "", ""];

createBoard(boardCells, gameBoard);