import StartToastifyInstance from "toastify-js";

export function showNotification(message, theme) {
    StartToastifyInstance({
        text: message,
        duration: 2000,
        gravity: 'top',
        position: 'right',
        style: {
            background: theme === 'dark' ? 'black' : 'white',
            color: theme === 'dark' ? 'white' : 'black',
        },
    }).showToast();
}