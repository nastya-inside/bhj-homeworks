document.addEventListener('DOMContentLoaded', function () {
    
    let checkBoxes = document.querySelectorAll('.interest__check');
        
    for (let i = 0; i < checkBoxes.length; i++){
    checkBoxes[i].addEventListener('change', function (){
        
    let parent = checkBoxes[i].closest('.interest');
    let children = parent.querySelectorAll('.interest__check');
                
    if (checkBoxes[i].checked === true) {
        for (let j = 0; j < children.length; j++){
            children[j].checked = true;
        }
    } 
        
    if (checkBoxes[i].checked === false) {
        for (let j = 0; j < children.length; j++){
            children[j].checked = false;
        }
    }  
    });
    }  
});