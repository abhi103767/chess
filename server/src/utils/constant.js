module.export = {
    board: Array(8).fill(Array(8).map((item) => item.fill(null))),

    back_board: [
        ["RookBlack", "KnightBlack", "KnightBlack", "BishopBlack", "QueenBlack", "KingBlack", "BishopBlack", "RookBlack"],
        ["PawnBlack", "PawnBlack","PawnBlack", "PawnBlack","PawnBlack", "PawnBlack","PawnBlack", "PawnBlack"],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null]
        ["RookWhite", "KnightWhite", "KnightWhite", "BishopWhite", "QueenWhite", "KingWhite", "BishopWhite", "RookWhite"],
        ["PawnWhite", "PawnWhite","PawnWhite", "PawnWhite","PawnWhite", "PawnWhite","PawnWhite", "PawnWhite"]

    ],
    black_posi: {
        PawnBlack: [
            [6, 0],
            [6, 1],
            [6, 2],
            [6, 3],
            [6, 4],
            [6, 5],
            [6, 6],
            [6, 7],
        ],
        KnightBlack: [
            [7, 1],
            [7, 6],
        ],
        RookBlack: [
            [7, 0],
            [7, 7],
        ],
        BishopBlack: [
            [7, 2],
            [7, 5],
        ],
        QueenBlack: [[7, 3]],
        KingBlack: [[7, 4]],
    },
    white_posi: {
        PawnWhite: [
            [1, 0],
            [1, 1],
            [1, 2],
            [1, 3],
            [1, 4],
            [1, 5],
            [1, 6],
            [1, 7],
        ],
        KnightWhite: [
            [0, 1],
            [0, 6],
        ],
        RookWhite: [
            [0, 0],
            [0, 7],
        ],
        BishopWhite: [
            [0, 2],
            [0, 5],
        ],
        QueenWhite: [[0, 3]],
        KingWhite: [[0, 4]],
    },
}


