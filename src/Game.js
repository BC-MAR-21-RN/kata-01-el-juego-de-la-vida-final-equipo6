const Game = function (row, col) {
  this.row = row
  this.col = col
  this.matrix = []
  this.matrixReload = []
}

Game.prototype.create = function (value) {
  this.matrix = Array(this.row).fill().map(() => Array(this.col).fill(value))
  this.matrixReload = this.matrix.map(function (arr) {
    return arr.slice()
  })
  return this.matrix
}

Game.prototype.show = function () {
  let html = ''
  for (let row = 0; row < this.row; row++) {
    html += '<br>'
    for (let col = 0; col < this.col; col++) {
      html += this.matrix[row][col] + ' '
    }
  }
  return html
}

Game.prototype.cell = function (row, col) {
  this.matrix[row][col] = 1
}

Game.prototype.neighbours = function (row, col) {
  let count = 0
  const position = [
    [row - 1, col - 1],
    [row - 1, col],
    [row - 1, col + 1],
    [row, col + 1],
    [row + 1, col + 1],
    [row + 1, col],
    [row + 1, col - 1],
    [row, col - 1]
  ]

  for (let i = 0; i < position.length; i++) {
    const rowVerify = position[i][0]
    const colVerify = position[i][1]

    if (isOnBoard(rowVerify, colVerify, this.row, this.col) && isCellAlive(this.matrix, rowVerify, colVerify)) {
      count += this.matrix[rowVerify][colVerify]
    }
  }

  function isOnBoard (row, col, rowSize, colSize) {
    return row >= 0 && col >= 0 && row < rowSize && col < colSize
  }

  function isCellAlive (board, row, col) {
    return board[row][col] === 1
  }
  return count
}

Game.prototype.statusCell = function (row, col) {
  const neighbours = this.neighbours(row, col)
  let cell = this.matrix[row][col]

  if (cell === 1) {
    if (underpopulation(neighbours)) {
      cell = 0
      this.matrixReload[row][col] = 0
    } else if (overcrowding(neighbours)) {
      cell = 0
      this.matrixReload[row][col] = 0
    } else if (nextGeneration(neighbours)) {
      cell = 1
      this.matrixReload[row][col] = 1
    }
  } else if (cell === 0) {
    if (reborn(neighbours)) {
      cell = 1
      this.matrixReload[row][col] = 1
    }
  }

  return cell

  function underpopulation (neighbours) {
    return neighbours < 2
  }

  function overcrowding (neighbours) {
    return neighbours > 3
  }

  function nextGeneration (neighbours) {
    return neighbours === 2 || neighbours === 3
  }

  function reborn (neighbours) {
    return neighbours === 3
  }
}

Game.prototype.nextGeneration = function () {
  this.matrix = this.matrixReload.map(function (arr) {
    return arr.slice()
  })
}
