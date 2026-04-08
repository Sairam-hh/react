import { useReducer, useCallback, useEffect } from "react";

const WIN_LINES = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

function checkWinner(board) {
  for (const [a, b, c] of WIN_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c])
      return { winner: board[a], line: [a, b, c] };
  }
  return null;
}

const initialState = {
  board: Array(9).fill(null),
  currentPlayer: "X",
  winner: null,
  winLine: [],
  isDraw: false,
  scores: { X: 0, O: 0, D: 0 },
};

function reducer(state, action) {
  switch (action.type) {
    case "CLICK": {
      const { index } = action;
      if (state.winner || state.isDraw || state.board[index]) return state;

      const newBoard = [...state.board];
      newBoard[index] = state.currentPlayer;

      const result = checkWinner(newBoard);
      const isDraw = !result && newBoard.every(Boolean);

      return {
        ...state,
        board: newBoard,
        currentPlayer: state.currentPlayer === "X" ? "O" : "X",
        winner: result?.winner || null,
        winLine: result?.line || [],
        isDraw,
        scores: result
          ? { ...state.scores, [result.winner]: state.scores[result.winner] + 1 }
          : isDraw
          ? { ...state.scores, D: state.scores.D + 1 }
          : state.scores,
      };
    }
    case "RESET":
      return { ...initialState, scores: state.scores, currentPlayer: "X" };
    default:
      return state;
  }
}

function Cell({ value, isWin, onClick }) {
  const color = value === "X" ? "#185FA5" : "#993C1D";
  return (
    <button
      onClick={onClick}
      style={{
        width: 90, height: 90,
        fontSize: 36, fontWeight: 500,
        cursor: value ? "default" : "pointer",
        background: isWin ? "#EAF3DE" : "white",
        border: "0.5px solid #ccc",
        borderRadius: 8,
        color: value ? color : "transparent",
        transition: "background 0.15s",
      }}
    >
      {value || "."}
    </button>
  );
}

export default function TicTacToe() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { board, currentPlayer, winner, winLine, isDraw, scores } = state;

  const handleClick = useCallback(
    (i) => dispatch({ type: "CLICK", index: i }),
    []
  );

  const resetGame = useCallback(
    () => dispatch({ type: "RESET" }),
    []
  );

  useEffect(() => {
    if (winner || isDraw) {
      const timer = setTimeout(resetGame, 2000);
      return () => clearTimeout(timer);
    }
  }, [winner, isDraw, resetGame]);

  const status = winner
    ? `Player ${winner} wins!`
    : isDraw
    ? "It's a draw!"
    : `Player ${currentPlayer}'s turn`;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, padding: 32 }}>
      <div style={{ display: "flex", gap: 32 }}>
        {["X", "D", "O"].map((key) => (
          <div key={key} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 12, color: "#888" }}>{key === "D" ? "Draws" : `Player ${key}`}</div>
            <div style={{ fontSize: 24, fontWeight: 500, color: key === "X" ? "#185FA5" : key === "O" ? "#993C1D" : "#888" }}>
              {scores[key]}
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 15, color: "#555" }}>{status}</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 90px)", gap: 8 }}>
        {board.map((val, i) => (
          <Cell
            key={i}
            value={val}
            isWin={winLine.includes(i)}
            onClick={() => handleClick(i)}
          />
        ))}
      </div>

      <button onClick={resetGame} style={{ padding: "8px 20px", borderRadius: 8, border: "0.5px solid #ccc", cursor: "pointer", background: "transparent", fontSize: 14,backgroundColor:"skyblue " }}>
        New game
      </button>
    </div>
  );
}