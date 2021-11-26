window.onload = function () {    
        
let arrHoles = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    
    for (let j = 1; j < arrHoles.length; j++) {
        
        document.getElementById('hole' + j).innerHTML = arrHoles [j-1];
        
        arrHoles[j].onclick = function(){
            let deadCounter = 0;
            document.getElementById('dead').innerHTML = deadCounter;
            let lostCounter = 0;
            document.getElementById('lost').innerHTML = lostCounter;
            
            if (hole.classList.contains('hole_has-mole')) {
                isDead++;
            }
            else {
                isLost++;
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