const createBoard = (boardCells, gameBoard) => {
    boardCells.forEach((_) => {
        const boardSquare = document.createElement("div");
        boardSquare.classList.add("square");
        gameBoard.append(boardSquare);
    })
};

export default createBoard; 