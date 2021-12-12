document.addEventListener('DOMContentLoaded', function () {

    let main_links = document.querySelectorAll(".menu_main > .menu__item > .menu__link"); 
  
    
    main_links.forEach(function(item) {
        item.addEventListener('click', function (e) {
                        
            //let hasSubMenu = item.closest(".menu__item").querySelector(".menu_sub");
            
            //if (hasSubMenu === true) {
            //    hasSubMenu.classList.toggle("menu_active");
            //}
            
            let menu_item = document.getElementsByName("menu__item");
            let menu_sub = document.getElementsByClassName("menu_sub");
            
            if (menu_item.contains(menu_sub) === true) {
                menu_sub.classList.toggle("menu_active");
            }
                   
           return false;
                        
        });
    });
    
});


