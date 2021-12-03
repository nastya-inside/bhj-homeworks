document.addEventListener('DOMContentLoaded', function () {
    let menu_items = document.querySelectorAll(".menu__link");
    let sub_menues = document.querySelectorAll(".menu_sub");
    
    menu_items.forEach(function(item) {
        item.addEventListener('click', function (e) {
            
            e.preventDefault();
            
            if (item.closest(".menu_sub")) {
                sub_menues.classList.add("menu_active");
            }
            
        });
    });
    
});
