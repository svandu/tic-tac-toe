import { tickIcon, crossIcon } from "./constants.js";

let currentOperation = tickIcon;
let currentImgClass = "tick";

const createBoard = (boardCells, gameBoard) => {
    boardCells.forEach((_,index) => {
        const boardSquare = document.createElement("div");
        boardSquare.classList.add("square");
        // boardSquare.dataset.id = index;
        boardSquare.addEventListener("click", clickOperations); 
        gameBoard.append(boardSquare);
    })
};

const clickOperations = (e) => {
  const operationImg = document.createElement("img");
  operationImg.classList.add(`${currentImgClass}-img`);
    operationImg.setAttribute("src", currentOperation);
    e.target.append(operationImg);

    currentOperation = currentOperation === tickIcon ? crossIcon : tickIcon;
    currentImgClass = currentImgClass === "tick" ? "cross" : "tick";
  
    e.target.removeEventListener("click", clickOperations);
    checkScore();
};

const checkScore = () => {
    const allSquare = document.querySelectorAll(".square");
    const winCondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

winCondition.forEach((arr) => {
    const tickWin = arr.every((cell) =>
      allSquare[cell].firstChild?.classList.contains("tick-img")
    );

    if (tickWin) alert("Tick user win!!!");
  });

  winCondition.forEach((arr) => {
    const crossWin = arr.every((cell) =>
      allSquare[cell].firstChild?.classList.contains("cross-img")
    );

    if (crossWin) alert("Cross user win!!!");
  });
};

export default createBoard; 