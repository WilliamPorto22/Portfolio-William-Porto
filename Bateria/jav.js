'use strict';

const sons = {
    'A': 'ride.wav',
    'S': 'boom.wav',
    'D': 'snare.wav',
    'F': 'kick.wav',
    'H': 'tom.wav',
    'J': 'snare.wav',
    'K': 'openhat.wav',
}

const exibir = (sons) => Object.keys(sons).forEach;

const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`);
    audio.play();
}
const adicionarEfeito = (letra) => document.getElementById(letra)
    .classList.toggle('active');

const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend', removeActive);
};

const ativarDiv = (evento) => {
    const letra = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase();
    const letraPermitida = sons.hasOwnProperty(letra);
    if (letraPermitida) {
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
}

exibir(sons);
document.getElementById('container')
    .addEventListener('click', ativarDiv);

window.addEventListener('keyup', ativarDiv);