from game.cell import Cell

class Board:
    """
        - cells: list of cells
        - width, height
        + get_cell(x, y)
        + get_neighbors(cell)
        + init()
        + draw()
    """
    def __init__(self, width, height):
        self.width = width
        self.height = height
        self.cells = [ Cell(x, y) for x in range(width) for y in range(height) ]

    def get_cell(self, x, y):
        return self.cells[x + y * self.width]
    
    def get_neighbors(self, cell):
        neighbors = []
        for dx in [-1, 0, 1]:
            for dy in [-1, 0, 1]:
                if dx == 0 and dy == 0:
                    continue
                x = cell.x + dx
                y = cell.y + dy
                if x >= 0 and x < self.width and y >= 0 and y < self.height:
                    neighbors.append(self.get_cell(x, y))
        return neighbors
    
    def init(self):
        for cell in self.cells:
            cell.alive = False

    def draw(self):
        for y in range(self.height):
            for x in range(self.width):
                cell = self.get_cell(x, y)
                print(cell.alive and 'X' or '.', end='')
            print()

    
