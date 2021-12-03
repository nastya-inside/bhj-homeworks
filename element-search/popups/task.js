document.addEventListener('DOMContentLoaded', function () {
    let modal_1 = document.getElementById("modal_main");
    let modal_2 = document.getElementById("modal_success");
    let btn_1 = document.querySelectorAll(".show-success");
    let btn_2 = document.getElementsByClassName("btn_success");
    let btn_close = document.querySelectorAll(".modal__close");
    
    window.onload = function () {
        modal_1.classList.add("modal_active");
    }
    
    btn_close.forEach(function(item) {
        item.addEventListener('click', function (e) {
            
            e.preventDefault();

            let parentModal = this.closest('.modal');
            
            parentModal.classList.remove('modal_active');
            
        });
    });
    
    btn_1.forEach(function(item) {
        item.addEventListener('click', function (event) {
            modal_2.classList.add('modal_active');
        });
    });
    
});
    

