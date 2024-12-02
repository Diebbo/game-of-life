import unittest
from cell import Cell

class test_cell(unittest.TestCase):

  def test_isAlive(self):
    c = Cell(2,2)
    self.assertEqual(c.isAlive(), False)

  def test_setAlive(self):
    c = Cell(2,2)
    c.setAlive()
    self.assertEqual(c.isAlive(), True)
  
  def test_setDead(self):
    c = Cell(2,2)
    c.setAlive()
    self.assertEqual(c.isAlive(), True)
    c.setDead()
    self.assertEqual(c.isAlive(), False)
