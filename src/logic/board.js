

export const checkWinner = (boardChecked, movekey, moveindex) => {
  const rows = boardChecked.length;
  const columns = boardChecked[0].length;
  const boardKeys = Object.keys(boardChecked);
  const value = boardChecked[movekey][moveindex];
  let countHorizontal = 0;
  let countVertical = 0;
  //checkeo horizontal
  for (const valueCheck of boardChecked[movekey]) {
    if (valueCheck === value) {
      countHorizontal++
      if (countHorizontal === 4) {
        return value;
      }
    } else {
      countHorizontal = 0;
    }
  }
  // checkeo vertical
  for (const key of boardKeys) {
    if (boardChecked[key][moveindex] === value) {
      countVertical++
      if (countVertical === 4) {
        return value;
      }
    } else {
      countVertical = 0;
    }
  }
  // chequeo diagonal hacia arriba
  for (let row = 0; row < rows - 3; row++) {
    for (let column = 0; column < columns; column++) {
      if (
        boardChecked[row][column] === value &&
        boardChecked[row + 1][column + 1] === value &&
        boardChecked[row + 2][column + 2] === value &&
        boardChecked[row + 3][column + 3] === value
      ) {
        return value;
      }
    }
  }
  // chequeo diagonal hacia abajo
  for (let row = 3; row < rows; row++) {
    for (let column = 0; column < columns - 3; column++) {
      if (
        boardChecked[row][column] === value &&
        boardChecked[row - 1][column - 1] === value &&
        boardChecked[row - 2][column - 2] === value &&
        boardChecked[row - 3][column - 3] === value
      ) {
        return value;
      }
    }
  }

  // Comprobar diagonales hacia la izquierda y hacia abajo
  for (let row = 0; row < rows - 3; row++) {
    for (let column = columns - 1; column >= 3; column--) {
      if (
        boardChecked[row][column] === value &&
        boardChecked[row + 1][column - 1] === value &&
        boardChecked[row + 2][column - 2] === value &&
        boardChecked[row + 3][column - 3] === value
      ) {
        return value;
      }
    }
  }
  return null;
}

export const checkValidKey = (boardChecked, index) => {
  const boardKeys = Object.keys(boardChecked);
  for (const key of boardKeys) {
    if (boardChecked[key][index] === null) {
      return key;
    }
  }
  return false;
}

export const checkEndGame = (boardChecked) => {
  const boardKeys = Object.keys(boardChecked);
  for (const key of boardKeys) {

    if (boardChecked[key].includes(null)) return false;
  }
  return true;
}


