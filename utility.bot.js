const stalematePost = '4k3/7K/3Q4/8/8/8/8/8 w - - 0 1';
const check = '8/6K1/R5P1/2kn3p/7P/8/3p4/8 b - - 2 66';
const obj = {
    position: 'start',
    draggable: true,
    onlyLegalMoves: true,
    enableSound: true,
    timeFormat:{minute:5, increment:5, ID1:'player2-time', ID2:'player1-time'},
    orientation: 'white',
    pieceTheme: 'merida',
    format: 'svg',
    darkColor: '#BB9AB1',
    lightColor: '#EECEB9',
    highlightSquare: false,
    highlightLegalMoves: true,
    showNotation: true,
}

const chessboard = new Chessboard('chessBoard', obj);
let fen, pgn, bestmove;
let searchTime = 2000;
let queue = [];
let depth = 24;
let multipv = 1;
let skillLevel = 10;
let hashSize = 32;
let stockfish = null;

initializeStockfish(skillLevel, hashSize, multipv);


async function game() {
    fen = chessboard.fen();
    if (chessboard.turn === 'b') {
        bestmove = await getBestMove(depth, searchTime, fen);
        setTimeout(() => {
            let start = bestmove.slice(0, 2), end = bestmove.slice(2, 4);
            start = chessboard.convertCoordtoId(start);
            end = chessboard.convertCoordtoId(end);
            if (bestmove.length === 5) { chessboard.makeMove(start, end, `engineSays_${bestmove[4]}`); }
            else { chessboard.makeMove(start, end, 'byClick') };
        }, 210);
    }
    pgn = chessboard.PGN;
    pgnGenerator(pgn);
    console.log('Turn:', chessboard.turn);
    console.log('FEN:', fen);
    console.log('PGN:', pgn);
    console.log('Best move: ', bestmove);
}
chessboard.bridge(game);
