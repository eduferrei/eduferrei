"use strict";

const sons = {
  A: `sounds/cartoon-jump-6462.mp3`,
  S: `sounds/failure-drum-sound-effect-2-7184.mp3`,
  D: `sounds/funny-cartoon-cry-144756.mp3`,
  F: `sounds/funny-reaction-120318.mp3`,
  G: `sounds/funny-sound-effect-for-quotjack-in-the-boxquot-sound-ver1-110923.mp3`,
  H: `sounds/man-scream-121085.mp3`,
  J: `sounds/my-good-120319.mp3`,
  K: `sounds/pipe-117724.mp3`,
  L: `sounds/very-infectious-laughter-117727.mp3`,
}

const criarDiv = (texto) => {
  const div = document.createElement("div");
  div.classList.add("key");
  div.textContent = texto;
  div.id = texto;
  document.getElementById("container").appendChild(div);
};


const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
  const audio = new Audio(sons[letra]);
  audio.play();
};

const adicionarEfeito = (letra) =>  document.getElementById(letra).classList.add("active");

const removerEfeito = (letra) => {
  const div = document.getElementById(letra);
  const removeActive = () => div.classList.remove("active");
  div.addEventListener("transitionend", removeActive);
};

const ativarDiv = (evento) => {
  const letra = evento.type == "click" ? evento.target.id : evento.key.toUpperCase();

  const letraPressionada = sons.hasOwnProperty(letra);
  if (letraPressionada) {
    adicionarEfeito(letra);
    tocarSom(letra);
    removerEfeito(letra);
  }
};

exibir(sons);
document.getElementById("container").addEventListener("click", ativarDiv);
document.addEventListener("keydown", ativarDiv);

const randomSoundButton = document.getElementById("randomSoundButton");

// Função para reproduzir um som aleatório
const reproduzirSomAleatorio = () => {
  const letras = Object.keys(sons);
  const letraAleatoria = letras[Math.floor(Math.random() * letras.length)];
  tocarSom(letraAleatoria);
};

randomSoundButton.addEventListener("click", reproduzirSomAleatorio);

// window.addE...;