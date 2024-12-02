# game of life

## components

- game:
    - board
    - rules
    + run()
    + stop()
    + reset()
    + step(delta_time = 1s)
- board:
    - cells: list of cells
    - width, height
    + get_cell(x, y)
    + get_neighbors(cell)
    + init()

- cell:
    - state: alive, dead
    - position: x, y

