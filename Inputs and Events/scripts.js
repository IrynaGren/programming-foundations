function changeBackgroundColor() {
    const canvas = document.getElementById("myCanvas");
    const colorPicker = document.getElementById("colorPicker");
    const color = colorPicker.value;
    canvas.style.backgroundColor = color;
}

function doSquare() {
    const slider = document.getElementById("slider");
    const canvas = document.getElementById("myCanvas");
    const context = canvas.getContext("2d");

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Get the slider value
    const sideLength = parseInt(slider.value);

    // Draw a square
    context.fillStyle = "blue"; // You can change the color
    context.fillRect(10, 10, sideLength, sideLength);

    // Example of making the position of the second square dependent on the first
    const xPosition = 10 + sideLength + 20; // Adjust this as needed
    context.fillStyle = "red"; // You can change the color
    context.fillRect(xPosition, 10, sideLength, sideLength);
}
