import unittest
from board import Board
from cell import Cell

class TestBoard(unittest.TestCase):
    def test_board(self):
        board = Board(3, 3)
        self.assertEqual(board.width, 3)
        self.assertEqual(board.height, 3)
        self.assertEqual(len(board.cells), 9)
        self.assertEqual(board.get_cell(0, 0).x, 0)
        self.assertEqual(board.get_cell(0, 0).y, 0)
        self.assertEqual(board.get_cell(1, 1).x, 1)
        self.assertEqual(board.get_cell(1, 1).y, 1)

