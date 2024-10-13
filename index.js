const button = document.querySelector('button');
const output = document.querySelector('.output');

button.addEventListener('click', function() {
    output.innerHTML = 'Нажав на донат, вы подтверждаете перевод денег нме!';
});