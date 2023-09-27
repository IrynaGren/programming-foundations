// Global variables
let fgImage = null;
let bgImage = null;
let fgCanvas = document.getElementById("foregroundCanvas");
let bgCanvas = document.getElementById("backgroundCanvas");
let compositeButton = document.getElementById("compositeButton");
let clearButton = document.getElementById("clearButton");

// Event handlers
function loadForegroundImage() {
    fgImage = new SimpleImage(document.getElementById("foregroundInput"));
    fgImage.drawTo(fgCanvas);
    alert("Foreground image loaded");
}

function loadBackgroundImage() {
    bgImage = new SimpleImage(document.getElementById("backgroundInput"));
    bgImage.drawTo(bgCanvas);
    alert("Background image loaded");
}

function clearCanvas() {
    let context1 = fgCanvas.getContext("2d");
    let context2 = bgCanvas.getContext("2d");
    context1.clearRect(0, 0, fgCanvas.width, fgCanvas.height);
    context2.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
}

function doGreenScreen() {
    if (fgImage == null || !fgImage.complete()) {
        alert("Foreground image has not been loaded");
        return;
    }

    if (bgImage == null || !bgImage.complete()) {
        alert("Background image has not been loaded");
        return;
    }

    clearCanvas();

    // Green screen algorithm here

    // Draw the final composite image to the right canvas
    // Example: finalImage.drawTo(bgCanvas);
}

// Event listeners
document.getElementById("foregroundInput").addEventListener("change", loadForegroundImage);
document.getElementById("backgroundInput").addEventListener("change", loadBackgroundImage);
clearButton.addEventListener("click", clearCanvas);
compositeButton.addEventListener("click", doGreenScreen);
