document.addEventListener('DOMContentLoaded', function () {
    
    let prev_arrow = document.querySelector(".slider__arrow_prev");
    let next_arrow = document.querySelector(".slider__arrow_next");
    
    prev_arrow.addEventListener('click', prevSlide);
    next_arrow.addEventListener('click', nextSlide);
    
       
    //ищем индекс активного элемента  
    let slides = document.getElementsByClassName("slider__item");
    let slidesArr = Array.from(slides);
    let active = document.querySelector(".slider__item_active");
    let indexOfActive = slidesArr.indexOf(active);
    
    showSlides(indexOfActive);
    
    function nextSlide() {
        showSlides(indexOfActive += 1);
    }
    
    function prevSlide() {
        showSlides(indexOfActive -= 1);
    }
    
    
    function showSlides(indexOfActive) {
                
        if (indexOfActive > slidesArr.length) {
            indexOfActive = 1;
        }
        
        if (indexOfActive < 1) {
            indexOfActive = slidesArr.length;
        }
        
        for (let i = 0; i < slidesArr.length; i++) {
            slidesArr[i].style.display = "none";
        }
        
        slidesArr[indexOfActive - 1].style.display = "block";
    }
    
});