document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector(".tasks__add");
    
    //создадим функцию, которая будет добавлять новый эл-т списка 
    function newElementOfList () {
        const div = document.createElement("div");
        let inputValue = document.getElementById("task__input").value;
        const t = document.createTextNode(inputValue);
        div.classList.add("task__title");
        div.appendChild(t);
        
    //новый контейнер task
        const container = document.createElement("div");
        container.classList.add("task");
        
        if (inputValue.charAt(0) === '' || inputValue.charAt(0) === ' ') {
            inputValue = '';
        } else {
            document.getElementById("tasks__list").appendChild(container);
            container.appendChild(div);
       }
        
        //создадим ссылку, которая будет являться типо кнопкой закрытия
        const a = document.createElement("a");
        a.classList.add("task__remove");
        document.getElementById("tasks__list").appendChild(a);
        a.innerHTML = "&times;";
        container.appendChild(a);
      
        
        a.addEventListener('click', function () {
            container.remove();
        });
        
        //очистим инпут
        document.getElementById("task__input").value = "";
    } 
    
    //повесим обработчик событий на кнопку
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        newElementOfList();
    });
    
});