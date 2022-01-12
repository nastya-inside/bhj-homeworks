document.addEventListener('DOMContentLoaded', function () {
    let rotators = document.getElementsByClassName("rotator__case");
    let rotatorsArr = Array.from(rotators);
    
  
    
    for (const rotator of rotators) {
          
        setInterval(() => {
          
        let indexOfActiveRotator = rotatorsArr.indexOf(0);
        let activeRotator = document.querySelector('.rotator__case_active')
        
        console.log(indexOfActiveRotator);
        
        if (indexOfActiveRotator === 0) {
            activeRotator.classList.remove('rotator__case_active');
            indexOfActiveRotator++;
            rotator.classList.add('rotator__case_active');
        }
            
            
        if (indexOfActiveRotator === 6) {
            indexOfActiveRotator = 0;
        }
    
}, 1000)
}
});