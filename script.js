"use strict";

const sons = {
  A: {
    audio: 'sounds/cartoon-jump-6462.mp3',
    count: 0 // Inicializa o contador com zero
  },
  //A: {audio:`sounds/cartoon-jump-6462.mp3`, count:0},
  S: {audio:`sounds/failure-drum-sound-effect-2-7184.mp3`, count:0},
  D: {audio:`sounds/funny-cartoon-cry-144756.mp3`, count:0},
  F: {audio:`sounds/funny-reaction-120318.mp3`, count:0},
  G: {audio:`sounds/funny-sound-effect-for-quotjack-in-the-boxquot-sound-ver1-110923.mp3`, count:0},
  H: {audio:`sounds/man-scream-121085.mp3`, count:0},
  J: {audio:`sounds/my-good-120319.mp3`, count:0},
  K: {audio:`sounds/pipe-117724.mp3`, count:0},
  L: {audio:`sounds/very-infectious-laughter-117727.mp3`, count:0},
};

const criarDiv = (letra) => {
  const divContainer = document.createElement("div");
  divContainer.classList.add("key-container");

  const divBotao = document.createElement("div");
  divBotao.classList.add("key");
  divBotao.textContent = letra;
  divBotao.id = letra;

  const contadorDiv = document.createElement('div');
  contadorDiv.classList.add('contador');
  contadorDiv.id = `contador-${letra}`;
  contadorDiv.textContent = `Contagem: 0`; // Inicializa o contador em zero

  divContainer.appendChild(divBotao);
  divContainer.appendChild(contadorDiv);

  document.getElementById("container").appendChild(divContainer);
};

const exibir = (sons) => {
  Object.keys(sons).forEach((letra) => {
    criarDiv(letra);
    criarContador(letra);
  });
};


const criarContador = (letra) => {
  const contadorDiv = document.createElement('div');
  contadorDiv.classList.add('contador');
  contadorDiv.id = `contador-${letra}`;
  contadorDiv.textContent = `Contagem: 0`; // Inicializa o contador em zero
  document.getElementById('contador').appendChild(contadorDiv);
};

const tocarSom = (letra) => {
  const audio = new Audio(sons[letra].audio);
  audio.play();
};

const adicionarEfeito = (letra) =>  document.getElementById(letra).classList.add("active");

const removerEfeito = (letra) => {
  const div = document.getElementById(letra);
  const removeActive = () => div.classList.remove("active");
  div.addEventListener("transitionend", removeActive);
};

const ativarDiv = (evento) => {
  const letra = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase();

  const letraPressionada = sons.hasOwnProperty(letra);
  if (letraPressionada) {
    adicionarEfeito(letra);
    tocarSom(letra);
    removerEfeito(letra);

    // Atualiza o contador da tecla
    sons[letra].count++;

    // Atualiza a exibição do contador
    atualizarContador(letra);
  }
};

const atualizarContador = (letra) => {
  const contadorElement = document.getElementById(`contador-${letra}`);
  if (contadorElement) {
    contadorElement.textContent = `Contagem: ${sons[letra].count}`;
  }
};

exibir(sons);
document.getElementById("container").addEventListener("click", ativarDiv);
document.addEventListener("keydown", ativarDiv);

// window.addE...;
