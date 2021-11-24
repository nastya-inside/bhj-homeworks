window.onload = function() {
    let sec = 30;
    timer = setInterval(function() {
        document.getElementById("timer").innerHTML = sec;
        sec--;
        
        if (sec === 00) {
            sec = 30;
        }               
    }, 1000);
    
    setTimeout(() => { clearInterval(timer); alert('Вы победили в конкурсе!'); }, 31300);
}

