document.addEventListener('DOMContentLoaded', function () {
    let removeButton = document.getElementsByClassName('task__remove');
    let elementOfList = document.querySelector('.task');
    let btn = document.querySelector(".tasks__add");
    
    //создадим функцию, которая будет добавлять новый эл-т списка 
    function newElementOfList () {
        let div = document.createElement("div");
        let inputValue = document.getElementById("task__input").value;
        let t = document.createTextNode(inputValue);
        div.classList.add("task__title");
        div.appendChild(t);
        
    //новый контейнер task
        let container = document.createElement("div");
        container.classList.add("task");
            
        if (inputValue === '') {
            alert ('You have to type something dude');
        } else {
            document.getElementById("tasks__list").appendChild(container);
            container.appendChild(div);
        }
        
        //создадим ссылку, которая будет являться типо кнопкой закрытия
        let a = document.createElement("a");
        a.classList.add("task__remove");
        document.getElementById("tasks__list").appendChild(a);
        a.innerHTML = "&times;";
        container.appendChild(a);
        
        //очистим инпут
        document.getElementById("task__input").value = "";
        
        //закрытие элемента списка по клику на кнопку 
        for (let i = 0; i < a.length; i++) {
        a[i].addEventListener("click", function () {
        let element = this.parentElement;
        element.style.display = "none";
        });    
    }
    } 
    
    //повесим обработчик событий на кнопку
    btn.addEventListener("click", function () {
        newElementOfList();
    });

    
});