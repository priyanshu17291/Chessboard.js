# Chessboard.js Documentation

## Overview
`Chessboard.js` is a powerful and versatile JavaScript library designed for creating interactive chessboards. It provides a wide range of features and customization options, making it easy to implement and tailor to your specific needs. With `Chessboard.js`, you can incorporate *drag-and-drop* functionality for pieces, *theme customization*, *blindfold mode*, *move highlighting*, and much more.

## Key Features

- **Drag-and-Drop Movement:** Intuitive piece movement using drag-and-drop.
- **Theme Customization:** Easily customize the look and feel of the board and pieces.
- **Blindfold Mode:** Option to hide pieces, creating a blindfold chess experience.
- **Highlight Valid Moves:** Automatically highlight legal moves for a selected piece.
- **History Tracking:** Record moves in PGN and FEN formats for analysis or replay.
- **Orientation Control:** Dynamically flip the board's perspective during gameplay.
- **Spare Pieces:** Add or remove spare pieces from the board for setup scenarios.

## Properties

### 1. **sparePieces**
- **Type:** `Boolean`
- **Default:** `false`
- **Description:** Controls whether spare pieces are available on the board. When enabled, you can drag and drop spare pieces onto the board to set up custom positions.

### 2. **legalMoveOnly**
- **Type:** `Boolean`
- **Default:** `false`
- **Description:** Restricts moves to only those that are legal according to the rules of chess. If set to `true`, illegal moves will be prevented.

### 3. **moves**
- **Type:** `Array`
- **Default:** `[]`
- **Description:** An array that tracks all the moves made during the game. Each move is recorded in algebraic notation.

### 4. **turn**
- **Type:** `String`
- **Default:** `"w"`
- **Description:** Indicates the current player's turn. `"w"` for white, `"b"` for black.

### 5. **status**
- **Type:** `String`
- **Default:** `"active"`
- **Description:** Reflects the current status of the game. Possible values include `"active"`, `"checkmate"`, `"stalemate"`, `"draw"`, etc.

### 6. **PGN**
- **Type:** `String`
- **Default:** `""`
- **Description:** Stores the Portable Game Notation (PGN) for the game, allowing for easy sharing, analysis, or export of the game's move history.

### 7. **FENs**
- **Type:** `Array`
- **Default:** `[]`
- **Description:** Maintains a history of board states in Forsyth-Edwards Notation (FEN), enabling position tracking and state restoration.

### 8. **orientation**
- **Type:** `String`
- **Default:** `"white"`
- **Description:** Sets the board's orientation, determining which side is at the bottom. Possible values are `"white"` and `"black"`.

### 9. **draggable**
- **Type:** `Boolean`
- **Default:** `false`
- **Description:** Enables or disables the ability to drag pieces across the board. If set to `true`, pieces can be moved by dragging.

### 10. **showNotation**
- **Type:** `Boolean`
- **Default:** `false`
- **Description:** Controls whether the file (a-h) and rank (1-8) notation is displayed on the board. Useful for players who prefer visual aids.

## Methods

### 1. **constructor(id, options = {})**
- **Parameters:**
  - `id` (String): The HTML element ID where the chessboard will be rendered.
  - `options` (Object): Optional settings to customize the board's behavior and appearance.
- **Description:** Initializes a new Chessboard object, rendering the board in the specified HTML element and applying any provided options.

### 2. **enableDrag()**
- **Description:** Enables the drag-and-drop functionality for all pieces on the board. Once activated, users can move pieces by clicking and dragging.

### 3. **disableDrag()**
- **Description:** Disables the drag-and-drop functionality, preventing users from moving pieces by dragging. Useful for locking the board during certain game phases.

### 4. **start()**
- **Description:** Resets the board to the standard starting position, ready for a new game. This method can be used to quickly restart the game.

### 5. **flipBoard()**
- **Description:** Flips the board's orientation, switching the perspective from white to black or vice versa. This is particularly useful for two-player games or for reviewing moves from the opponent's perspective.

### 6. **fen()**
- **Returns:** `String`
- **Description:** Returns the current board state in Forsyth-Edwards Notation (FEN). This is useful for saving or sharing the exact position of pieces on the board.

### 7. **makeMove(start, end, method)**
- **Parameters:**
  - `start` (String): The starting square of the piece (e.g., `"e2"`).
  - `end` (String): The ending square of the piece (e.g., `"e4"`).
  - `method` (String, Optional): The method of movement (e.g., `"drag"`, `"manual"`). 
- **Description:** Makes a move from the `start` square to the `end` square. This method automatically updates the game state and records the move.

### 8. **sparePieces(permission)**
- **Parameters:**
  - `permission` (Boolean): If `true`, spare pieces will be visible and usable. If `false`, they will be hidden.
- **Description:** Controls the visibility and availability of spare pieces on the board. This method is useful for setting up custom board positions or scenarios.
