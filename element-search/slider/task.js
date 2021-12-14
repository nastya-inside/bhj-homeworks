document.addEventListener('DOMContentLoaded', function () {
    
    let prev_arrow = document.querySelector(".slider__arrow_prev");
    let next_arrow = document.querySelector(".slider__arrow_next");
    
    prev_arrow.addEventListener('click', prevSlide);
    next_arrow.addEventListener('click', nextSlide);
    
    let slideIndex = 1;
    showSlides(slideIndex);
    
    function nextSlide() {
        showSlides(slideIndex += 1);
    }
    
    function prevSlide() {
        showSlides(slideIndex -= 1);
    }
    
    function currentSlide(n) {
        showSlides (slideIndex = n);
    }
    
    function showSlides(n) {
        
        let slides = document.getElementsByClassName("slider__item");
        
        if (n > slides.length) {
            slideIndex = 1;
        }
        
        if (n < 1) {
            slideIndex = slides.length;
        }
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.toggle("slider__item_active");
        }
    }
    
});
