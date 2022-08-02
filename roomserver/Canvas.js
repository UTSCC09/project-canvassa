/**
 * This is a local model for the canvas. It provides similar functionality to the real canvas.
 */

let canvas = {
  lines: [],
  historyCache: [],
  lastEdit: Date(),
};

function addLines(lines) {
  canvas.lines.push(lines);
  clearHistory();
  updateDate();
}

function removeLines(lines) {
  canvas.lines = canvas.lines.filter((l) => l in lines);
  updateDate();
}

function undoEdit() {
  if (canvas.lines.length > 0) canvas.historyCache.push(canvas.lines.pop());
  updateDate();
}

function redoEdit() {
  if (historyCache.length > 0) canvas.lines.push(canvas.historyCache.pop());
  updateDate();
}

function clearHistory() {
  canvas.historyCache = [];
}

function loadCanvas(canvasObj) {
  if (Object.keys(canvasObj).length != 0) {
    canvas = canvasObj;
  } else {
    console.log("Canvas is Empty");
  }
}

function getCanvas() {
  return canvas;
}

function updateDate() {
  canvas.lastEdit = Date();
}

export default {
  addLines,
  removeLines,
  undoEdit,
  redoEdit,
  loadCanvas,
  getCanvas,
  canvas: canvas,
};
