document.addEventListener('DOMContentLoaded', function () {
    let rotators = document.querySelectorAll(".rotator__case");
    let activeRotator = document.querySelector('.rotator__case_active');
    let index = 0;
        
    function setActiveElement() {
           if (index >= rotators.length) {
            index = 0;
            }
        
        rotators[index].classList.remove('rotator__case_active');
        rotators[++index].classList.add('rotator__case_active');
        
    }
              
     setInterval(() => {
     setActiveElement()
}, 1000)

});