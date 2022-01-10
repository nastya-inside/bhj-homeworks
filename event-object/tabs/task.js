document.addEventListener('DOMContentLoaded', function () {
    let tab = document.querySelectorAll(".tab");
    let tabContent = document.querySelectorAll(".tab__content");
    

    for (let i = 0; i < tab.length; i++) {

        tab[i].addEventListener("click", function(e){
            
        //ищем классы и индексы активных элементов
        let activeTab = document.querySelector(".tab_active");
        let activeContent = document.querySelector(".tab__content_active");
        
        activeTab.classList.remove('tab_active');
        tab[i].classList.add('tab_active');
        
        activeContent.classList.remove('tab__content_active');
        tabContent[i].classList.add('tab__content_active');
            
        e.preventDefault();
        });
      
    }
    
    
});