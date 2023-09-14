console.log("Bem vindo ao JavaScript") // testando no terminal

//  emite um alerta no inicio que abre a página (retira o coméntario)
const para = document.querySelector('p');

para.addEventListener('click', atualizarNome);

function atualizarNome() {
  let nome = prompt('Digite seu nome');
  para.textContent = 'Bem vindo ao curso de Javascript! ' + nome;
}