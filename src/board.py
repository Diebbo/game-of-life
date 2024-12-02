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



