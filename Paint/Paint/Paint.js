var canvas;
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

var previousColorElement;
//color: Color
//imgElement: DOM Object
function changeColor(color, imgElement) {
    context.strokeStyle = color;
    imgElement.className = "Selected";

    if (previousColorElement !== null) {
        previousColorElement.className = "";
    }
    previousColorElement = imgElement;
}

var previousThicknessElement;

function changeThickness(thickness, imgElement) {
    context.lineWidth = thickness;
    imgElement.className = "Selected";

    if (previousThicknessElement !== null) {
        previousThicknessElement.className = "";
    }
    previousThicknessElement = imgElement;
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
