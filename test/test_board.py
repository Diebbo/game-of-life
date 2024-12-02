import unittest
from game.board import Board
from game.cell import Cell

class TestBoard(unittest.TestCase):

    def setUp(self):
        self.board = Board(5, 5)

    def test_board_initialization(self):
        self.assertEqual(self.board.width, 5)
        self.assertEqual(self.board.height, 5)
        self.assertEqual(len(self.board.cells), 25)

    def test_get_cell(self):
        cell = self.board.get_cell(2, 3)
        self.assertEqual(cell.x, 2)
        self.assertEqual(cell.y, 3)

    def test_get_neighbors(self):
        cell = self.board.get_cell(2, 2)
        neighbors = self.board.get_neighbors(cell)
        self.assertEqual(len(neighbors), 8)
        neighbor_coords = [(n.x, n.y) for n in neighbors]
        expected_coords = [
            (1, 1), (1, 2), (1, 3),
            (2, 1),         (2, 3),
            (3, 1), (3, 2), (3, 3)
        ]
        self.assertCountEqual(neighbor_coords, expected_coords)

    def test_init(self):
        self.board.init()
        for cell in self.board.cells:
            self.assertFalse(cell.state)

    def test_draw(self):
        self.board.init()
        output = []
        for y in range(self.board.height):
            row = []
            for x in range(self.board.width):
                cell = self.board.get_cell(x, y)
                row.append(cell.state and 'X' or '.')
            output.append(''.join(row))
        expected_output = ['.....', '.....', '.....', '.....', '.....']
        self.assertEqual(output, expected_output)

if __name__ == '__main__':
    unittest.main()
