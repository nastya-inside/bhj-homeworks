document.addEventListener('DOMContentLoaded', function () {
    
    document.addEventListener("scroll", function (){
        let block = document.getElementsByClassName('reveal');
            
        let isInViewport = function(element){
            const viewPortHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            
            return elementTop < viewPortHeight ? true : false;
        };
        
        for (let i = 0; i < block.length; i++) {
                
        if (isInViewport(block[i]) === true) {
            block[i].classList.add("reveal_active");
        } else {
             block[i].classList.remove("reveal_active");
        }
        }

    });
});