# Interactive Demo

A React component that mimics the UX pattern from Consensus's interactive demo. Users rate topics by importance to build a personalized learning track in real time.

## Features

**Left panel — Topic Rating Table**
- Rate each topic as Very Important, Somewhat Important, or Not Important
- "Select all" shortcut at the top of each column
- Progress counter showing how many topics have been rated
- Continue button unlocks once all topics are rated

**Right panel — Live Learning Track**
- Updates instantly as ratings change
- Very Important topics appear first, then Somewhat Important
- Not Important topics are hidden
- Header shows total topic count and total duration of the curated track

## Tech Stack

- React 18 with `useState` (no external state libraries)
- Vite
- Tailwind CSS v3

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```
