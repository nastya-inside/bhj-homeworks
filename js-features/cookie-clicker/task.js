window.onload = function() {

let image = document.getElementById('cookie');
let counter = 0;
    
 image.onclick = function() {
     document.getElementById('clicker__counter').innerHTML = counter;
     counter++;
     
     if (counter%2 === 0) {
         image.width = 260;
     }
     else {
         image.width = 210; 
     }
 } 
}