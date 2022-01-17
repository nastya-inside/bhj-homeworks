document.addEventListener('DOMContentLoaded', function () {
    let rotators = document.getElementsByClassName("rotator__case");
              
     setInterval(() => {
            
   for (let i = 0; i < rotators.length; i++) {
                          
   function findActiveElement () {
       let activeElement = document.querySelector('.rotator__case_active');
       
       activeElement.classList.remove('rotator__case_active');
       rotators[i].classList.add('rotator__case_active');
       
   }
       
       findActiveElement();
   }
    
}, 1000)

});