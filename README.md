# Outline

A whiteboard website for sketching and drawing on boards. Built using HTML, CSS, and JavaScript. Uses `localStorage` for persistence.

## What this is

Outline is a board manager built around a whiteboard system. The dashboard (`dashboard.html`) is an interface for creating, renaming, deleting, searching, and managing boards. Each board opens a separate whiteboard page (`drawing.html`).

## Tech stack

- HTML
- CSS
- JavaScript
- Localstorage

## File structure

```
/dashboard.html
/drawing.html
/style.css
/script.js
```

## Dashboard features

### Boards system
- Create new boards
- Store boards in `localStorage`
- Persist even when refreshing (because it is saved in localstorage ofc, 2nd line)

### Board actions
- Open board (redirects to `drawing.html?board=<id>`)
- Rename board
- Delete board

### UI features
- Responsive grid board layout
- Simple hover effects on cards
- Empty state when no boards exist
- Black and white UI

### Search
- Real-time searching capabilities

## How the dashboard works

Boards are stored as an array in `localStorage` under `outline_boards`.

Each board object:
```js
{
  id: string,
  name: string,
  date: string
}
```

When a board is created, it is saved to the person's localStorage, the dashboard updates, and it appears in the grid instantly.

## Drawing page

`drawing.html` is an existing whiteboard engine integrated into this project. It reads the `board` query parameter to load and save per-board state under `outline_v2_<id>` in localStorage. The board name is synced back to the dashboard on change.

### Tools
Select, Pen, Eraser, Rectangle, Ellipse, Line, Arrow, Text, Sticky Note, Image upload/drag-drop

### Canvas
- Infinite canvas — scroll to zoom, Space+drag to pan
- Select, drag, resize, and rotate objects
- Undo/redo (up to 80 steps)
- Copy/paste and duplicate
- Context menu (right-click)

### Export
PNG, SVG, JSON

### Persistence
Each board's canvas state saves automatically to localStorage on every change.

## Known limitations
- No backend — all data is local to the browser
- No multi-device sync or cloud storage
- Filters (Recent/Favorites/Shared/Archived) are UI-only on the dashboard
- No authentication

## Getting started

1. Clone or download the project
2. Open `dashboard.html` in a browser
3. Create boards using the "New Board" button
4. Click a board to open the whiteboard
