const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const message = [
    'Message one',
    'Message two',
    'Message three',
    'Message four'
];

button.addEventListener('click', () => createNotification()) 

function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast');

    notif.innerText = getRandomMessage();

    toasts.appendChild(notif);
}

function getRandomMessage() {
    return message[Math.floor(Math.random) * message.length];
}