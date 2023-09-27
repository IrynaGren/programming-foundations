function upload() {
    // Get the file input element
    const fileInput = document.getElementById('fileInput');

    // Get the canvas element
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Check if a file was selected
    if (fileInput.files.length > 0) {
        // Create a SimpleImage from the chosen file
        const file = fileInput.files[0];
        const img = new SimpleImage(file);

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the image on the canvas while maintaining its aspect ratio
        if (img.width > img.height) {
            const aspectRatio = img.height / img.width;
            const newWidth = canvas.width;
            const newHeight = canvas.width * aspectRatio;
            ctx.drawImage(img, 0, 0, newWidth, newHeight);
        } else {
            const aspectRatio = img.width / img.height;
            const newWidth = canvas.height * aspectRatio;
            const newHeight = canvas.height;
            ctx.drawImage(img, 0, 0, newWidth, newHeight);
        }
    }
}
