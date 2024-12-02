class GameOfLife {
	constructor(rows = 50, cols = 50) {
		this.rows = rows;
		this.cols = cols;
		this.gameBoard = document.getElementById("gameBoard");
		this.startBtn = document.getElementById("startBtn");
		this.resetBtn = document.getElementById("resetBtn");
		this.intervalId = null;

		this.initBoard();
		this.setupEventListeners();
	}

	initBoard() {
		for (let i = 0; i < this.rows; i++) {
			const row = document.createElement("tr");
			for (let j = 0; j < this.cols; j++) {
				const cell = document.createElement("td");
				cell.classList.add("cell");
				cell.dataset.row = i;
				cell.dataset.col = j;
				cell.addEventListener("click", this.toggleCell.bind(this));
				row.appendChild(cell);
			}
			this.gameBoard.appendChild(row);
		}
	}

	toggleCell(event) {
		const cell = event.target;
		cell.classList.toggle("alive");
	}

	setupEventListeners() {
		this.startBtn.addEventListener("click", this.start.bind(this));
		this.resetBtn.addEventListener("click", this.reset.bind(this));
	}

	start() {
		this.startBtn.disabled = true;
		this.intervalId = setInterval(this.updateBoard.bind(this), 100);
	}

	reset() {
		const cells = this.gameBoard.querySelectorAll(".cell");
		cells.forEach((cell) => cell.classList.remove("alive"));

		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.startBtn.disabled = false;
		}
	}

	updateBoard() {
		const cells = this.gameBoard.querySelectorAll(".cell");
		const board = Array.from({ length: this.rows }, () =>
			Array(this.cols).fill(0),
		);

		// Populate current board state
		cells.forEach((cell, index) => {
			const row = Math.floor(index / this.cols);
			const col = index % this.cols;
			board[row][col] = cell.classList.contains("alive") ? 1 : 0;
		});

		const newBoard = board.map((row, i) =>
			row.map((cell, j) => this.calculateCellState(board, i, j)),
		);

		// Update board
		newBoard.forEach((row, i) => {
			row.forEach((state, j) => {
				const cellIndex = i * this.cols + j;
				const cell = cells[cellIndex];
				cell.classList.toggle("alive", state === 1);
			});
		});
	}

	calculateCellState(board, row, col) {
		const cell = board[row][col];
		const neighbors = [
			[-1, -1],
			[-1, 0],
			[-1, 1],
			[0, -1],
			[0, 1],
			[1, -1],
			[1, 0],
			[1, 1],
		];

		const count = neighbors.reduce((sum, [dx, dy]) => {
			const newRow = row + dx;
			const newCol = col + dy;

			if (
				newRow >= 0 &&
				newRow < this.rows &&
				newCol >= 0 &&
				newCol < this.cols
			) {
				return sum + board[newRow][newCol];
			}
			return sum;
		}, 0);

		if (cell === 1) {
			return count < 2 || count > 3 ? 0 : 1;
		} else {
			return count === 3 ? 1 : 0;
		}
	}
}

// Initialize the game
new GameOfLife();
