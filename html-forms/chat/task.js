document.addEventListener('DOMContentLoaded', function () {
    
   let widget = document.querySelector('.chat-widget');
   let time = document.querySelectorAll('.message__time');
    
    //откроем чат по клику
    widget.addEventListener('click', function() {
        this.classList.add('chat-widget_active');
    });
    
    //установим время
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let currentTime = hour + ':' + minute;
        
    //отправка сообщения клиента в чат 
    let input = document.querySelector('input');
            
    input.addEventListener('keyup', function(e) {
        let clientMessage = document.querySelector('.message_client > .message__text');
        let chat = document.getElementById('chat-widget__messages');
        let input = document.getElementById('chat-widget__input');
        
        //добавим сообщения и организуем рандомный выбор
        const messages = document.querySelector('.chat-widget__messages');
        let message = document.getElementsByClassName('message');
        const messagesArr = [
            'Я не выспался',
            'Ничего не знаю, моя хата с краю',
            'Пока',
            'Мужчина, вы что не видите, у нас обед'
        ];
    
        let messageArr = messagesArr[Math.floor(Math.random()*messagesArr.length)];
        
        function clear() {
            input.value = '';
        }
        
        if (input.value != ''){
        if (e.keyCode == 13) {
        chat.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${currentTime}</div>
        <div class="message__text">${e.target.value}</div>
        </div>
        `; 
        clear();
        messages.innerHTML += `
        <div class="message">
        <div class="message__time">${currentTime}</div>
        <div class="message__text">${messageArr}</div>
        </div>
        `;
        }    
        } else {
            return
        }
    });   
});