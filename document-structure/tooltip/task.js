document.addEventListener('DOMContentLoaded', function () {
    
    let tips = document.querySelectorAll('.has-tooltip');
    
    //создадим элемент подсказки 
    let div = document.createElement('div');
    div.classList.add('tooltip');
    
    for (let i = 0; i < tips.length; i++){
        
        tips[i].onclick = function (e){ 
        e.preventDefault();
        
        let pos = tips[i].getBoundingClientRect();
            
        //выравнивание подсказки
        div.style.top =  pos.top + 20 + "px";
        div.style.left = pos.left + 1 + "px";
            
        let parent = tips[i].parentNode;
        parent.insertBefore(div, tips[i]);
        div.classList.add("tooltip_active"); 
        div.innerHTML = tips[i].getAttribute('title');
            
        if (div.style.display == "block") {
            div.style.display = "none";
        } else {
            div.style.display = "block";
        }
        };
        
        
        
    }   
});