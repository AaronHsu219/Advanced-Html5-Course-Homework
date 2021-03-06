﻿var canvas;
var context;
var isDrawing = false;

window.onload = function() {
  canvas = document.getElementById("drawingCanvas");
  context = canvas.getContext('2d');
  //畫布在滑鼠左鍵壓下的時候 = 開始繪圖
  canvas.onmousedown = startDrawing;
  canvas.onmouseup = stopDrawing;
  canvas.onmouseout = stopDrawing;
  canvas.onmousemove = draw;
  previousElement = null;
  previousColorElement = null;
  previousThicknessElement = null;
};

function startDrawing(e) {
  isDrawing = true;
  context.beginPath();
  var mouseX = e.pageX - canvas.offsetLeft;
  var mouseY = e.pageY - canvas.offsetTop;
  context.moveTo(mouseX, mouseY);
}

function stopDrawing(e) {
  isDrawing = false;
}

function draw(e) {
  if (isDrawing) {
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;
    context.lineTo(x, y);
    context.stroke();
  }
}

var previousElement;
var ColorElement;
var ThicknessElement;

function changePty(imgElement) {
  imgElement.className = "Selected";
  if (previousElement !== null) {
    previousElement.className = "";
  }
  previousElement = imgElement;
}

function changeColor(color, imgElement) {
  changePty.call(this, imgElement)
  context.strokeStyle = color;
}

function changeThickness(thickness, imgElement) {
  changePty.call(this, imgElement)
  context.lineWidth = thickness;
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function saveCanvas() {
  var imageCopy = document.getElementById('savedImageCopy');
  imageCopy.src = canvas.toDataURL();
  var imgContainer = document.getElementById("savedCopyContainer");
  imgContainer.style.display = "block";
}
