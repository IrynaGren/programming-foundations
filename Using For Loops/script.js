// Create a new image with dimensions 200x200
var img = new SimpleImage(200, 200);

// Loop through each pixel in the image
for (var pixel of img.values()) {
    // Set the pixel color to yellow
    pixel.setRed(255);
    pixel.setGreen(255);
    pixel.setBlue(0);
}

// Display the resulting image
print(img);
