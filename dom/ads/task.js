document.addEventListener('DOMContentLoaded', function () {
    let rotators = document.querySelectorAll(".rotator__case");
    let activeRotator = document.querySelector('.rotator__case_active');
    let index = 0;
        
    function setActiveElement() {
        rotators[index].classList.remove('rotator__case_active');
        rotators[++index].classList.add('rotator__case_active');
        
        if (index < rotators.lenght) {
            index === 0;
}
        
    }
              
     setInterval(() => {
     setActiveElement()
}, 1000)

});