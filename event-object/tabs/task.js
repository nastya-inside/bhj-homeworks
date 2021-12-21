document.addEventListener('DOMContentLoaded', function () {
    let tabs = document.querySelectorAll(".tab");
    let tabsArr = Array.from(tabs);
    let tabContent = document.querySelectorAll(".tab__content");
    let tabContentArr = Array.from(tabContent);
    
    for (let i = 0; i < tabsArr.length; i++) {
        
    tabsArr[i].addEventListener('click', function (e) {
        //ищем классы и индексы активных элементов
        let activeTab = document.querySelector(".tab_active");
        let activeContent = document.querySelector(".tab__content_active");
        let indexOfActiveTab = tabsArr.indexOf(activeTab);
        let indexOfActiveContent = tabContentArr.indexOf(activeContent);
                
        //выбираем активную вкладку
        let lastClicked = activeTab;
        lastClicked.classList.remove('tab_active');
        this.classList.add("tab_active");
        
        //устанавливаем активный блок с контентом
        for (let j = 0; j < tabContentArr; j++) {
            if (indexOfActiveTab === 1) {
                activeContent.style.display = "none";
                //let addIndex = indexOfActiveContent + 1;
                //addIndex.style.display = "block";
            }
        }
    

    });
    }
});