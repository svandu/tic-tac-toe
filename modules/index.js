import { tickIcon, crossIcon } from "./constants.js";

let currentOperation = tickIcon;

const createBoard = (boardCells, gameBoard) => {
    boardCells.forEach((_,index) => {
        const boardSquare = document.createElement("div");
        boardSquare.classList.add("square");
        boardSquare.dataset.id = index;
        boardSquare.addEventListener("click", clickOperations); 
        gameBoard.append(boardSquare);
    })
};

const clickOperations = (e) => {
    const operationImg = document.createElement("img");
    operationImg.classList.add("square-img");
    operationImg.setAttribute("src", currentOperation);
    e.target.append(operationImg);

    currentOperation = currentOperation === tickIcon ? crossIcon : tickIcon;
};

export default createBoard; 