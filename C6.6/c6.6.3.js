const wsUri = "wss://echo-ws-service.herokuapp.com";

const chatContent = document.querySelector('.chat-content');
const chatInput = document.querySelector('.chat-input');
const btnSend = document.querySelector('.btn-send');
const btnGeo = document.querySelector('.btn-geo');

let websocket = new WebSocket(wsUri);
websocket.onmessage = function (evt) {
    showMessage(evt.data, 'in');
};

function showMessage(message, type) {
    let elem = document.createElement('p');
    elem.classList.add('message');
    elem.textContent = message;
    if (type === 'in') {
        elem.classList.add('message-in');
    } else if (type === 'link') {
        link = document.createElement('a');
        link.href = message;
        link.textContent = 'Ссылка на карту';
        elem.textContent = '';
        elem.appendChild(link);
    }
    chatContent.appendChild(elem);
    chatInput.value = '';
}

btnSend.addEventListener('click', () => {
    const message = chatInput.value;
    showMessage(message);
    websocket.send(message);
});

const error = () => {
    msg = 'Невозможно получить ваше местоположение';
    showMessage(msg);
}

const success = (position) => {
    // console.log('position', position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    showMessage(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`, 'link')
}

btnGeo.addEventListener('click', () => {
    if (!navigator.geolocation) {
        msg = 'Geolocation не поддерживается вашим браузером';
        showMessage(msg);
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
});