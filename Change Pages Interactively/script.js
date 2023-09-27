// Function to change background color of divs
function changeColor() {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.className = "new-class-1";
    div2.className = "new-class-2";
}

// Function to change text content of divs
function changeText() {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.innerHTML = "New text for div 1";
    div2.innerHTML = "New text for div 2";
}
