document.addEventListener("DOMContentLoaded", function () {
  // Get canvas elements
  var canvas1 = document.getElementById("canvas1");
  var canvas2 = document.getElementById("canvas2");

  // Get buttons
  var changeColorButton = document.getElementById("changeColorButton");
  var redButton = document.getElementById("redButton");
  var blueButton = document.getElementById("blueButton");

  // Track the current canvas being colored
  var currentCanvas = canvas1;

  // Attach event listeners
  changeColorButton.addEventListener("click", changeCanvasColor);
  redButton.addEventListener("click", doRed);
  blueButton.addEventListener("click", doBlue);

  // JavaScript function to change the background color of the current canvas
  function changeCanvasColor() {
    if (currentCanvas === canvas1) {
      currentCanvas = canvas2;
    } else {
      currentCanvas = canvas1;
    }
    currentCanvas.style.backgroundColor = currentCanvas.style.backgroundColor === "red" ? "blue" : "red";
  }

  // JavaScript functions to change canvas background colors
  function doRed() {
    var ctx = currentCanvas.getContext("2d"); // Get the 2D rendering context

    // Draw a red rectangle
    ctx.clearRect(0, 0, currentCanvas.width, currentCanvas.height); // Clear canvas
    ctx.fillStyle = "red"; // Set the fill color
    ctx.fillRect(20, 20, 100, 100); // Draw a filled rectangle (x, y, width, height)

    // Add text to the canvas
    ctx.fillStyle = "white"; // Set text color
    ctx.font = "20px Arial"; // Set font size and type
    ctx.fillText("Hello, Canvas!", 30, 70); // Draw text (text, x, y)
  }

  function doBlue() {
    var ctx = currentCanvas.getContext("2d"); // Get the 2D rendering context

    // Draw a blue rectangle
    ctx.clearRect(0, 0, currentCanvas.width, currentCanvas.height); // Clear canvas
    ctx.fillStyle = "blue"; // Set the fill color
    ctx.fillRect(20, 20, 100, 100); // Draw a filled rectangle (x, y, width, height)

    // Add text to the canvas
    ctx.fillStyle = "white"; // Set text color
    ctx.font = "20px Arial"; // Set font size and type
    ctx.fillText("Hello, Canvas!", 30, 70); // Draw text (text, x, y)
  }
});
