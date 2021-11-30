window.onload = function () {    
        
let allHoles = document.querySelectorAll(".hole");
let deadCounter = 0;
let lostCounter = 0;

    for (let i = 1; i < allHoles.length; i++) {
                
            allHoles[i].onclick = function(){
            document.getElementById('dead').innerHTML = deadCounter;
            document.getElementById('lost').innerHTML = lostCounter;
            
            if (allHoles[i].classList.contains('hole_has-mole')) {
                deadCounter++;
            }
            else {
                lostCounter++;
            }
            
            if (deadCounter === 10) {
                alert('You are winner');
                deadCounter = 0;
            }
            else if (lostCounter === 5) {
                alert('You are looser');
                lostCounter = 0;
            }
        } 
    }
}