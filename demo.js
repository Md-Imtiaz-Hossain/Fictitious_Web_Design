const gameWindowContainer =
  document.getElementsByClassName('canvas-container')[0];
const gameWindow = document.getElementById('gameCanvas');
const imageToDraw = document.getElementById('siteImage');

maxWidth = gameWindowContainer.offsetWidth;
maxHeight = gameWindowContainer.offsetHeight;
gameWindow.width = maxWidth;
gameWindow.height = maxHeight;
const xOffset = parseInt(maxWidth / 4);
const yOffset = parseInt(maxHeight / 4);

gameWindow.addEventListener('click', function (event) {
  const { x, y } = getMousePositionOnClick(gameWindow, event);
  const clickedRectX = Math.floor(x / xOffset);
  const clickedRectY = Math.floor(y / yOffset);
  console.log(x, y, clickedRectX, clickedRectY);
  context.clearRect(
    clickedRectX * xOffset + 1,
    clickedRectY * yOffset + 1,
    xOffset - 1,
    yOffset - 1
  );
  context.strokeRect(0, 0, maxWidth, maxHeight);
});

const context = gameWindow.getContext('2d');

// Drawing the border
context.lineWidth = 1;

for (let i = 0; i < 3; i++) {
  context.moveTo(xOffset * (i + 1), 0);
  context.lineTo(xOffset * (i + 1), maxHeight);
  context.stroke();
}
for (let i = 0; i < 3; i++) {
  context.moveTo(0, yOffset * (i + 1));
  context.lineTo(maxWidth, yOffset * (i + 1));
  context.stroke();
}

window.onload = function (event) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      context.drawImage(
        imageToDraw,
        i * xOffset + 1,
        j * yOffset + 1,
        xOffset - 1,
        yOffset - 1
      );
    }
  }
};
context.strokeRect(0, 0, maxWidth, maxHeight);

function getMousePositionOnClick(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const clickPosition = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
  return clickPosition;
}
