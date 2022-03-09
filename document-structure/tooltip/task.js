document.addEventListener('DOMContentLoaded', function () {
    
    let tips = document.querySelectorAll('.has-tooltip');
    
    //создадим элемент подсказки 
    let div = document.createElement('div');
    div.classList.add('tooltip');
    
    for (let i = 0; i < tips.length; i++){
            
        tips[i].addEventListener('click', function (e){ 
        e.preventDefault();
            
        let parent = tips[i].parentNode;
        parent.insertBefore(div, tips[i]); 
        div.classList.add("tooltip_active"); 
        });
    }   
});