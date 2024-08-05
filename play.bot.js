function initializeStockfish(skillLevel, hashSize, multipv) {
    if (!stockfish) {
        stockfish = new Worker('stockfish.js');
        stockfish.postMessage('uci');
        stockfish.postMessage(`setoption name Skill Level value ${skillLevel}`);
        stockfish.postMessage(`setoption name Hash value ${hashSize}`);
        stockfish.postMessage(`setoption name MultiPV value ${multipv}`);
    }
}

async function getBestMove(depth, searchTime, positionFEN) {
    return new Promise((resolve, reject) => {
        if (!stockfish) {
            reject(new Error('Stockfish worker is not initialized.'));
            return;
        }
        let bestMove = null;
        stockfish.onmessage = function (event) {
            const message = event.data;
            // console.log('Worker said: ', message);
            if (message.startsWith('bestmove')) {
                bestMove = message.split(' ')[1];
                resolve(bestMove);
            }
        };
        stockfish.postMessage(`position fen ${positionFEN}`);
        stockfish.postMessage(`go depth ${depth} movetime ${searchTime}`);
    });
}
let moveNo = 1;
function pgnGenerator(PGN) {
    const lastmoves = PGN[PGN.length - 1]
    const movesContainer = document.querySelector('.movepgn');
    const moveElement = document.createElement('div');
    moveElement.textContent = lastmoves;

    if (moveNo%2 === 1) {
        const newMove = document.createElement('div');
        newMove.className = 'pgn';
        const moveNumber = document.createElement('div')
        moveNumber.textContent = parseInt(moveNo/2 + 1) + '.';
        moveNo++;
        newMove.appendChild(moveNumber);
        newMove.appendChild(moveElement);
        movesContainer.appendChild(newMove);
    }
    else if (moveNo%2 === 0) {
        const last = movesContainer.lastChild;
        last.appendChild(moveElement);
        moveNo++;
    }
    movesContainer.scrollTop = movesContainer.scrollHeight;
}
