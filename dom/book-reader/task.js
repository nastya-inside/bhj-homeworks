document.addEventListener('DOMContentLoaded', function () {
    let menuElement = document.querySelectorAll('.font-size');
    let content = document.getElementsByClassName('book');
    let menuActiveElement = document.querySelector('.font-size_active');
    
    for (let i = 0; i < menuElement.length; i++) {
        
        menuElement[i].addEventListener("click", function(e){
                        
       if (this.hasAttribute('data-size')){
           let value = this.getAttribute('data-size');
                      
           if (value === 'small') {
            this.classList.add('font-size_active');
            menuActiveElement.classList.remove('font-size_active');
            content[i].classList.add('book_fs-small');
           }
           if (value === 'big') {
            this.classList.add('font-size_active');
            menuActiveElement.classList.remove('font-size_active');
            content[i].classList.add('book_fs-big');
           }
           
       } else {
          this.classList.add('font-size_active');
       }
            
             e.preventDefault();
        });

    }
});