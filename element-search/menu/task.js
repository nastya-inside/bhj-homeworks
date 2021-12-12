document.addEventListener('DOMContentLoaded', function () {

    let main_links = document.querySelectorAll(".menu_main > .menu__item > .menu__link"); 
  
    
    main_links.forEach(function(item) {
        item.addEventListener('click', function (e) {
            
            let menu_item = item.closest(".menu__item");
     
            if (menu_item.querySelector(".menu_sub")) {
                document.querySelectorAll(".menu_sub").classList.toggle("menu_active");
            }
            
           return false;
                        
        });
    });
    
});


