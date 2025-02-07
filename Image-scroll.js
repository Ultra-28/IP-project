// Ensure the script runs only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const images = ["Images/Blackrose-front.png", "Images/Blackrose-strap.png", "Images/Blackrose-body.png"];
    let currentIndex = 0;
    const imgElement = document.querySelector(".image-section img");

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
    }

    setInterval(changeImage, 3000); // Change image every 3 seconds
});
