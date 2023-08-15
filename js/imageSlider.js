// Image Slider
let slider = document.querySelector("#slider");
let slides = slider.querySelector(".slides");
let slide = slides.querySelectorAll(".slide");

let currentSlide = 0;

setInterval(function() {
    let from = -(1024 * currentSlide);
    let to = from - 1024;
    slides.animate({
        marginLeft: [from + "px", to + "px"]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    currentSlide++;
    if (currentSlide === (slide.length - 1)) {
        currentSlide = 0;
    }
}, 3000);
