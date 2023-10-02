console.log("Bem vindo ao JavaScript") // testando no terminal

//  emite um alerta no inicio que abre a página (retira o coméntario)
const para = document.querySelector('.alert');
para.addEventListener('click', atualizarNome);
function atualizarNome() {
  let nome = prompt('Digite seu nome');
  para.textContent = 'Bem vindo ao curso de Javascript! ' + nome;

  let nome1 = document.querySelector('.nome2');
  nome1.addEventListener('click', digiteNome);
  function digiteNome() {
    let nome2 = prompt('Digite seu nome');
    nome1.textContent = ' ' + nome2;


    let idade1 = document.querySelector('.idade2');
    idade1.addEventListener('click', digiteIdade);
    function digiteIdade() {
      let idade2 = prompt('Digite sua idade');
      idade1.textContent = ' ' + idade2;

      let frase1 = document.querySelector('.frase2');
      frase1.addEventListener('click', concatenar);
      function concatenar() {
        let frase2 = 'Meu nome é ' + nome2 +' e tenho ' + idade2 + ' anos!';
        frase1.textContent = ' '+ frase2;
      }
    }
  } 
}