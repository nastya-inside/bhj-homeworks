document.addEventListener('DOMContentLoaded', function () {
    
   let chat = document.querySelector('.chat-widget');
   let time = document.querySelectorAll('.message__time');
    
    //откроем чат по клику
    chat.addEventListener('click', function() {
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
        let client = document.querySelector('.message_client');
        let clientMessage = document.querySelector('.message_client > .message__text');
        
        if (e.keyCode == 13) {
            clientMessage.textContent = input.value;
        }
        
        for (let i = 0; i < clientMessage.length; i++) {
        clientMessage[i].innerHTML += `
        <div class="message message_client">
        <div class="message__time">${currentTime}</div>
        <div class="message__text">${input.value}</div>
        </div>
        `;
        }
        
    });
    
    //добавим сообщения 
    const messages = document.querySelector('.chat-widget__messages');
    let message = document.getElementsByClassName('message');
    
    messages.innerHTML += `
     <div class="message">
     <div class="message__time">${currentTime}</div>
     <div class="message__text">Я не выспался</div>
     </div>
     <div class="message">
     <div class="message__time">${currentTime}</div>
     <div class="message__text">Ничего не знаю, моя хата с краю</div>
     </div>
     <div class="message">
     <div class="message__time">${currentTime}</div>
     <div class="message__text">Пока</div>
     </div>
    `;
    
});