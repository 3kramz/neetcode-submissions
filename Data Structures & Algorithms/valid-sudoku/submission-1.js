class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let cols = Array.from({ length: 9 }, () => new Set());
        let boxes = Array.from({ length: 9 }, () => new Set());

        for (let row = 0; row < 9; row++) {
            let rows = new Set();

            for (let col = 0; col < 9; col++) {
                let val = board[row][col];
                if (val === ".") continue;

                let boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

                if (rows.has(val) || cols[col].has(val) || boxes[boxIndex].has(val)) {
                    return false;
                } else {
                    rows.add(val);
                    cols[col].add(val);
                    boxes[boxIndex].add(val);
                }
            }
        }

        return true;
    }
}
