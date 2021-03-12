function play () {
  const board = new Game(4, 8)
  board.create(Math.round(Math.random() * 1))
  document.getElementById('game').innerHTML = board.show()
  next(board)
}

function next (board) {
  let html = ''
  let count = 0
  do {
    html += '<p>Next Generation:</p>'
    html += '<div id="nextGeneration"></div>'
    for (let i = 0; i < board.row; i++) {
      for (let j = 0; j < board.col; j++) {
        board.statusCell(i, j)
      }
    }
    board.nextGeneration()
    html += board.show()
    document.getElementById('nextGeneration').innerHTML = html
    count++
  } while (count < 5)
}
