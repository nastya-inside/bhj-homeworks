document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector(".tasks__add");
    
    //создадим функцию, которая будет добавлять новый эл-т списка 
    function newElementOfList () {
        const div = document.createElement("div");
        let input = document.getElementById("task__input");
        const t = document.createTextNode(input.value);
        div.classList.add("task__title");
        div.appendChild(t);
        
    //новый контейнер task
        const container = document.createElement("div");
        container.classList.add("task");
        
        if (!input.value.trim()) {
            return;
        }
        
        document.getElementById("tasks__list").appendChild(container);
        container.appendChild(div);
       
        
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
        input.value = "";
    } 
    
    //повесим обработчик событий на кнопку
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        newElementOfList();
    });
    
});