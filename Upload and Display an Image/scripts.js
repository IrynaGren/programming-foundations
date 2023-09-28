function upload() {
    // Get the file input element
    const imageInput = document.getElementById("imageInput");

    // Check if a file was selected
    if (imageInput.files.length === 0) {
        alert("Please select an image to upload.");
        return;
    }

    // Create a SimpleImage from the chosen file
    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        const image = new SimpleImage(event.target.result);
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Set the canvas dimensions to match the image
        canvas.width = image.getWidth();
        canvas.height = image.getHeight();

        // Draw the image on the canvas
        image.drawTo(canvas);
    };

    reader.readAsDataURL(file);
}
