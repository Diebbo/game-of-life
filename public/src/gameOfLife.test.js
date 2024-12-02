const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const gameOfLifePath = path.resolve(__dirname, './game.js');
const gameOfLifeCode = fs.readFileSync(gameOfLifePath, 'utf8');

describe('GameOfLife', () => {
    let document;
    let game;

    beforeAll(() => {
        const html = `
            <table id="gameBoard"></table>
            <button id="startBtn"></button>
            <button id="resetBtn"></button>
        `;
        const dom = new JSDOM(`<!DOCTYPE html><html><body>${html}</body></html>`);
        document = dom.window.document;
        global.document = document;
        global.window = dom.window;
				// Include the GameOfLife class definition
				global.eval(gameOfLifeCode);	
    });

    beforeEach(() => {
        document.getElementById('gameBoard').innerHTML = '';
        game = new GameOfLife(5, 5);
    });

    test('should initialize the game board with the correct number of cells', () => {
        const cells = document.querySelectorAll('.cell');
        expect(cells.length).toBe(25);
    });

    test('should toggle cell state on click', () => {
        const cell = document.querySelector('.cell');
        cell.click();
        expect(cell.classList.contains('alive')).toBe(true);
        cell.click();
        expect(cell.classList.contains('alive')).toBe(false);
    });

    test('should reset the game board', () => {
        const cell = document.querySelector('.cell');
        cell.click();
        game.reset();
        expect(cell.classList.contains('alive')).toBe(false);
    });

    test('should calculate cell state correctly', () => {
        const board = [
            [0, 1, 0],
            [1, 1, 0],
            [0, 0, 0]
        ];
        const testGame = new GameOfLife(3, 3);
        expect(testGame.calculateCellState(board, 1, 1)).toBe(1);
        expect(testGame.calculateCellState(board, 0, 0)).toBe(1);
        expect(testGame.calculateCellState(board, 2, 2)).toBe(0);
    });
});

// Include the GameOfLife class definition
class GameOfLife {
    // ... (paste your entire GameOfLife class here)
}
