document.addEventListener('DOMContentLoaded', function () {
    
    let checkBoxes = document.querySelectorAll('.interest__check');
        
    for (let i = 0; i < checkBoxes.length; i++){
    checkBoxes[i].addEventListener('change', function (){
        
     //найдем родетельский элемент, который будет называться "parentInput"
       let li = this.closest('li');
       let ul = li.closest('ul');
       let liInterest = ul.closest('li');
       let parentInput = liInterest.querySelector('.interest__check');
        
    //найдем дочерние чекбоксы
        let childInputs = ul.querySelectorAll('.interest__check');
        console.log(childInputs)
        
        if (parentInput.checked) {
          childInputs.checked;
       }   
     
        
    });
    }
    
        
    
});