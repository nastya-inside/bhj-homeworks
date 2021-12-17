document.addEventListener('DOMContentLoaded', function () {
    
    let dropdown_list = document.querySelector(".dropdown__list");
    let button = document.querySelector(".dropdown__value");
    let dropdown_item = document.querySelectorAll(".dropdown__item");
  
    button.addEventListener('click', function (e) {
        dropdown_list.classList.toggle('dropdown__list_active');
        
    });
    
    let itemsArr = Array.from(dropdown_item);
    
    for (i = 0; i < itemsArr.length; i++) {
        
        itemsArr[i].addEventListener('click', function (e) {
            
        if (this.textContent === "JavaScript") {
            button.textContent = 'JavaScript';
        } else if (this.textContent === "PHP") {
            button.textContent = 'PHP';
        } else if (this.textContent === "Python") {
            button.textContent = 'Python';
        } else if (this.textContent === "Fortran") {
            button.textContent = 'Fortran';
        }   
            
        e.preventDefault();
       });      
    }    
    
    /*
    let itemsArr = Array.from(dropdown_item);
    
    for (i = 0; i < itemsArr.length; i++) {
        let firstEl = itemsArr[0];
        let secondEl = itemsArr[1];
        let thirdEl = itemsArr[2];
        let forthEl = itemsArr[3];
        
        firstEl.addEventListener('click', function () {
         button.textContent = 'JavaScript';
        });
        
        secondEl.addEventListener('click', function () {
        button.textContent = 'PHP';
        });
        
        thirdEl.addEventListener('click', function () {
        button.textContent = 'Python';
        });
        
        forthEl.addEventListener('click', function () {
        button.textContent = 'Fortran';
        });
        
    }
    */
 
    
    
    
});
