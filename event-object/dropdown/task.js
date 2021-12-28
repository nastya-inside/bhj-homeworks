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
            
        let text = this.textContent.trim();
                                    
        if (text === "JavaScript") {
            button.textContent = 'JavaScript';
        } else if (text === "PHP") {
            button.textContent = 'PHP';
        } else if (text === "Python") {
            button.textContent = 'Python';
        } else if (text === "Fortran") {
            button.textContent = 'Fortran';
        }   
            
        dropdown_list.classList.remove('dropdown__list_active');
            
        e.preventDefault();
       });      
    }       
});
