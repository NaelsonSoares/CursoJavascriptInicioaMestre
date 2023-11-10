console.log("Bem vindo ao JavaScript") // testando no terminal

//  emite um alerta no inicio que abre a página (retira o coméntario)
const para = document.querySelector('.alert');
para.addEventListener('click', atualizarNome);
function atualizarNome() {
  let nome = prompt();
  para.textContent = `Bem vindo ao curso de Javascript! ${nome}`;
}
  // CONCATENAÇÃO SIMPLES COM O SINAL DE " + "
  let nome1 = document.querySelector('.nome2');
  nome1.addEventListener('click', digiteNome);
  function digiteNome() {
    let nome2 = prompt();
    nome1.textContent = nome2;

    let idade1 = document.querySelector('.idade2');
    idade1.addEventListener('click', digiteIdade);
    function digiteIdade() {
      let idade2 = prompt();
      idade1.textContent = idade2;

      let frase1 = document.querySelector('.frase2');
      frase1.addEventListener('click', concatenar);
      function concatenar() {
        let frase2 = 'Meu nome é ' + nome2 +' e tenho ' + idade2 + ' anos!';
        frase1.textContent = ' '+ frase2;

        // CONCATENAÇÃO COM O "CIFRÃO ( $ )" SINTAXE RECOMENDADA
        let frase3 = document.querySelector('.frase4');
        frase3.addEventListener('click', concatenar);
        function concatenar() {
          let frase4 = `Meu nome é  ${nome2}  e tenho ${idade2} anos!`;
          frase3.textContent = ' '+ frase4;

          // TIPOS DE VARIÁVEIS: STRING, NUMBER
          let frase5 = document.querySelector('.tipos_var');
          frase5.addEventListener('click', tipos);
          function tipos() {
            let tipoString = nome2;
            let tipoNumber = parseInt(idade2);  // CONVERSÃO DE TIPOS DE VARIÁVEIS DE STRING PARA NUMBER (parseInt e parseFloat e toString)
            frase5.textContent = `${nome2} é uma ${typeof tipoString} e ${idade2} é um ${typeof tipoNumber}` ;
          }
        }
      }
    }
  }
            let entrada1 = document.querySelector('.entrada');
            entrada1.addEventListener('click', entradaqui);
            function entradaqui() {
              let entrada =   prompt();
              entrada1.textContent = `${entrada} = ${typeof entrada}`;

              let num1 = document.querySelector('.numero');
              num1.addEventListener('click', converternumber);
              function converternumber() {
                let numero = parseInt(entrada) ;
                num1.textContent  = ` ${entrada} = ${typeof numero}`;

                let letra1 = document.querySelector('.letra');
                letra1.addEventListener('click', converterstring);
                function converterstring() {
                  let letra = entrada.toString();
                  letra1.textContent = ` ${entrada} = ${typeof letra}`;
                }
              }
            }
        