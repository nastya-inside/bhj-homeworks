document.addEventListener('DOMContentLoaded', function () {
    
    let selectedInterests = document.querySelectorAll('.interest__check:checked');
    let unselectedInterests = document.querySelectorAll('.interest__check:indeterminate');
    
    let checkBoxes = document.querySelectorAll('.interest__check');
    
    for (let i = 0; i < checkBoxes.length; i++){
    checkBoxes[i].addEventListener('change', function (){
        
        let li = this.closest('li');
        let ul = li.closest('ul');
        let label = ul.closest('label');
        //let input = label.closest('.interest__check');
        console.log(label)
                
       // for (let j = 0; j < boxes.length; j++){
         //   if(boxes[j]['type'] == "checkbox")
         //       boxes[j]['checked'] = this.checked;
       // }
        
    });
    }
    
});