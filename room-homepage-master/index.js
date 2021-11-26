
function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").innerHTML = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").innerHTML = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 10);
}

var images = [], x = -1;
images[0] = "desktop-image-hero-1.jpg";
images[1] = "desktop-image-hero-2.jpg";
images[2] = "desktop-image-hero-3.jpg";
