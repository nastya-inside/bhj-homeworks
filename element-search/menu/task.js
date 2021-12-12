document.addEventListener('DOMContentLoaded', function () {

    let main_links = document.querySelectorAll(".menu_main > .menu__item > .menu__link"); 
  
    
    main_links.forEach(function(item) {
        item.addEventListener('click', function (e) {
                        
            let hasParent = item.closest(".menu__item");
            
            if (hasParent) {
                let sub_menu = hasParent.querySelector(".menu_sub");
                sub_menu.classList.toggle("menu_active");
            }
                   
        e.preventDefault();
                        
        });
    });
    
});


