describe('Game of Life', function () {
  let Game = require('../src/Game');
  let board;

  beforeEach(function () {
    board = new Game(4, 8);
    board.create(0);
  });

  it('can board be instance of Game', function () {
    expect(board).toBeInstanceOf(Game);
  })

  it('can be no there neighbours', function () {
    board.cell(2, 4);
    board.show()
    expect(board.neighbours(2, 4)).toBe(0);
  })

  it('can be there one neighbour', function () {
    board.cell(2, 4);
    board.cell(1, 4);
    board.show()
    expect(board.neighbours(2, 4)).toBe(1);
  })

  it('can be there two neighbours', function () {
    board.cell(2, 4);
    board.cell(1, 4);
    board.cell(3, 4);
    board.show()
    expect(board.neighbours(2, 4)).toBe(2);
  })

  it('can be there three neighbours', function () {
    board.cell(2, 4);
    board.cell(1, 4);
    board.cell(3, 4);
    board.cell(2, 5);
    board.show()
    expect(board.neighbours(2, 4)).toBe(3);
  })

  it('can be there four neighbours', function () {
    board.cell(2, 4);
    board.cell(1, 4);
    board.cell(3, 4);
    board.cell(2, 5);
    board.cell(2, 3);
    board.show()
    expect(board.neighbours(2, 4)).toBe(4);
  })

  it('can be there five neighbours', function () {
    board.cell(2, 4);
    board.cell(1, 4);
    board.cell(3, 4);
    board.cell(2, 5);
    board.cell(2, 3);
    board.cell(1, 3);
    board.show()
    expect(board.neighbours(2, 4)).toBe(5);
  })

  it('can be there six neighbours', function () {
    board.cell(2, 4);
    board.cell(1, 4);
    board.cell(3, 4);
    board.cell(2, 5);
    board.cell(2, 3);
    board.cell(1, 3);
    board.cell(1, 5);
    board.show()
    expect(board.neighbours(2, 4)).toBe(6);
  })
  it('can be there seven neighbours', function () {
    board.cell(2, 4);
    board.cell(1, 4);
    board.cell(3, 4);
    board.cell(2, 5);
    board.cell(2, 3);
    board.cell(1, 3);
    board.cell(1, 5);
    board.cell(3, 3);
    board.show()
    expect(board.neighbours(2, 4)).toBe(7);
  })
  it('can be there eight neighbours', function () {
    board.cell(2, 4);
    board.cell(1, 4);
    board.cell(3, 4);
    board.cell(2, 5);
    board.cell(2, 3);
    board.cell(1, 3);
    board.cell(1, 5);
    board.cell(3, 3);
    board.cell(3, 5);
    board.show()
    expect(board.neighbours(2, 4)).toBe(8);
  })

  it('can a cell with fewer than tow neighbours dies', function () {
    board.cell(2, 4);
    board.cell(1, 4);
    board.show()
    expect(board.statusCell(2, 4)).toBe(0);
  })

  it('can a cell with more than three neighbours dies', function () {
    board.cell(2, 4);
    board.cell(1, 4);
    board.cell(3, 4);
    board.cell(2, 5);
    board.cell(2, 3);
    board.show()
    expect(board.statusCell(2, 4)).toBe(0);
  })

  it('can a cell with two or three neighbours lives', function () {
    board.cell(2, 4);
    board.cell(1, 4);
    board.cell(3, 4);
    board.cell(2, 5);
    board.show()
    expect(board.statusCell(2, 4)).toBe(1);
  })

  it('can a cell with three neighbours, reborn', function () {
    board.cell(1, 4);
    board.cell(3, 4);
    board.cell(2, 5);
    board.show()
    expect(board.statusCell(2, 4)).toBe(1);
  })

});
