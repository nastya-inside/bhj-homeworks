document.addEventListener('DOMContentLoaded', function () {
    let menuElement = document.querySelectorAll('.font-size');
    let content = document.getElementsByClassName('book');
    let menuActiveElement = document.querySelector('.font-size_active');
        
    for (let i = 0; i < menuElement.length; i++) {
    
        menuElement[i].classList.add('font-size_active');
        menuElement[i].classList.remove('font-size_active');
    
                
        menuElement[i].addEventListener("click", function(e){
            
        menuActiveElement.classList.remove('font-size_active');
                        
        e.preventDefault();
                        
        if (this.hasAttribute('data-size')){
           let value = this.getAttribute('data-size');
                      
           if (value === 'small') {
            this.classList.add('font-size_active');
            content[i].classList.add('book_fs-small');
           }
           if (value === 'big') {
            this.classList.add('font-size_active');
            content[i - 2].classList.add('book_fs-big');
           }
           
       } else {
          this.classList.add('font-size_active');
          content[i - 1].classList.remove('book_fs-small');
          content[0].classList.remove('book_fs-big');
       }
            
        });
    }
});