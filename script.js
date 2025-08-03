let slideIndex = 0;
let slides = document.getElementsByClassName("myslides");
let interval;

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    interval = setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
    clearTimeout(interval);
    slideIndex += n - 1;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    if (slideIndex >= slides.length) slideIndex = 0;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    interval = setTimeout(showSlides, 3000);
}

showSlides(); // Start the carousel
