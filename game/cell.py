class Cell:
  # coordinate
  x = 0
  y = 0
  # stato di vita: true è viva, false altrimenti 
  state = False

  def __init__(self, x, y):
    self.x = x
    self.y = y

  def setAlive(self):
    self.state = True
    
  def setDead(self):
    self.state = False

  def isAlive(self):
    return self.state
