document.addEventListener('DOMContentLoaded', function () {
    
    document.addEventListener("scroll", function (){
        let block = document.querySelector('.reveal');
    
        let isInViewport = function(element){
            const viewPortHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            
            return elementTop < viewPortHeight ? true : false;
        };
                
        if (isInViewport(block) === true) {
            block.classList.add("reveal_active");
        } else {
             block.classList.remove("reveal_active");
        }

    });
});