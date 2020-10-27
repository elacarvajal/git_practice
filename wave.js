var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

function drawCurve(x, y, curves, canvasColor, strokeStyle) {
  context.beginPath();
  context.moveTo(x, y);
  for (let i = 0; i < curves.length; i++) {
    let c = curves[i];
    context.quadraticCurveTo(c[0], c[1], c[2], c[3]);
  }
  context.lineTo(canvas.width, canvas.height);
  context.lineTo(0, canvas.height);

  context.fillStyle = canvasColor;
  context.fill();
}
drawCurve(
  0,
  45,
  [
    [75, 27, 173, 44],
    [240, 50, 300, 35],
  ],
  '#98dbcc'
);
drawCurve(
  0,
  35,
  [
    [65, 65, 125, 45],
    [197, 20, 300, 45],
  ],
  '#00a780'
);
