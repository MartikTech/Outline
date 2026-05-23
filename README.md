# Outline

A minimal whiteboard/dashboard app for creating and managing boards. Built with vanilla HTML, CSS, and JavaScript. Uses `localStorage` for persistence.

## What this is

Outline is a simple board manager + entry point for a whiteboard system. It lets users create, rename, delete, and search boards from a dashboard UI.

Each board opens a separate page (`drawing.html`) using a query parameter.

## Tech stack

- HTML
- CSS
- JavaScript
- Local browser storage


## Features

### Boards system
- Create new boards via modal
- Store boards in `localStorage`
- Persist across refresh

### Board actions
- Open board (redirects to `drawing.html?board=<id>`)
- Rename board (prompt-based)
- Delete board (prompt-based)

### UI features
- Grid-based board layout (responsive)
- Hover effects on cards
- Empty state when no boards exist
- Minimal Notion-style UI

### Search
- Filters boards by title in real time

### Filters UI
- Recent / Favorites / Shared buttons
- Currently only UI state (no filtering logic implemented)

## File structure

```
/dashboard.html (dashboard)

/style.css

/script.js
```


## How it works

- Boards are stored as an array in `localStorage` under: outline_boards

- Each board object:
```js
{
  id: string,
  name: string,
  date: string
}
```

When a board is created:

* It is saved to localStorage
* Dashboard re-renders
* It appears in the grid instantly

## Known limitations
* No backend (data is local to the browser)
* No real timestamps (uses static "Edited just now")
* Filters (Recent/Favorites/Shared) are UI-only
* No authentication or multi-device sync
* drawing.html functionality depends on your implementation

## Getting started
1. Clone or download the project

2. Open index.html in a browser

3. Create boards using the "New Board" button

4. Click a board to open drawing.html

## Notes

This is a frontend-only prototype. The dashboard is fully functional, but the actual whiteboard experience depends on the implementation of drawing.html.
