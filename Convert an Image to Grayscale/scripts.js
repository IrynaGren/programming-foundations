// Declare global variables for the original and grayscale images
let originalImage;
let grayscaleImage;

function upload() {
    // Get the file input element
    const fileInput = document.getElementById('fileInput');

    // Create a SimpleImage from the chosen file
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        originalImage = new SimpleImage(file);

        // Draw the original image on the left canvas
        const originalCanvas = document.getElementById('originalCanvas');
        const ctxOriginal = originalCanvas.getContext('2d');
        ctxOriginal.clearRect(0, 0, originalCanvas.width, originalCanvas.height);
        originalImage.drawTo(originalCanvas);
    }
}

function makeGray() {
    // Check if the original image exists
    if (originalImage) {
        // Create a copy of the original image for grayscale conversion
        grayscaleImage = new SimpleImage(originalImage.getWidth(), originalImage.getHeight());

        // Convert the image to grayscale
        for (let pixel of originalImage.values()) {
            const avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
            pixel.setRed(avg);
            pixel.setGreen(avg);
            pixel.setBlue(avg);

            // Set the corresponding pixel in the grayscale image
            const x = pixel.getX();
            const y = pixel.getY();
            grayscaleImage.setPixel(x, y, pixel);
        }

        // Draw the grayscale image on the right canvas
        const grayscaleCanvas = document.getElementById('grayscaleCanvas');
        const ctxGrayscale = grayscaleCanvas.getContext('2d');
        ctxGrayscale.clearRect(0, 0, grayscaleCanvas.width, grayscaleCanvas.height);
        grayscaleImage.drawTo(grayscaleCanvas);
    } else {
        alert('Please upload an image first.');
    }
}
