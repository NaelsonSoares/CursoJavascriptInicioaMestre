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
// CONVERSÃO DE TIPOS DE VARIÁVEIS DE STRING PARA NUMBER (parseInt e parseFloat e toString)
let entrada1 = document.querySelector('.entrada');
entrada1.addEventListener('click', entradaqui);
function entradaqui() {
  let entrada =   prompt();
  entrada1.textContent = `${entrada} = ${typeof entrada}`;

  let num = document.querySelector('.numero');
  num.addEventListener('click', converternumber);
  function converternumber() {
    let numero = parseInt(entrada) ;
    num.textContent  = ` ${entrada} = ${typeof numero}`;

    let letra1 = document.querySelector('.letra');
    letra1.addEventListener('click', converterstring);
    function converterstring() {
      let letra = entrada.toString();
      letra1.textContent = ` ${entrada} = ${typeof letra}`;
    }
  }
}
  // OPERADORES ARITMÉTICOS ( +, -, *, /, %, ** )
  let num1 = document.querySelector('.digita1');
  num1.addEventListener('click', primeironum);
  function primeironum() {
  let digito1 = prompt();
  num1.textContent = digito1;

  let num2 = document.querySelector('.digita2');
  num2.addEventListener('click', segundonum);
  function segundonum() {
    let digito2 = prompt();
    num2.textContent = digito2;

    let adicao = document.querySelector('.soma');
    adicao.addEventListener('click', somando);
    function somando() {
      let soma = parseInt(digito1) + parseInt(digito2);
      adicao.textContent = `Adição = ${soma}`;

      let subtracao = document.querySelector('.subtrai');
      subtracao.addEventListener('click', subtraindo);
      function subtraindo() {
        let subtrai = parseInt(digito1) - parseInt(digito2);
        subtracao.textContent = `Subtração = ${subtrai}`;
        
        let multiplicacao = document.querySelector('.multi');
        multiplicacao.addEventListener('click', multiplicando);
        function multiplicando() {
          let multi = parseInt(digito1) * parseInt(digito2);
          multiplicacao.textContent = `Multiplicação = ${multi}`;

          let divicao = document.querySelector('.dividi');
          divicao.addEventListener('click', dividino);
          function dividino() {
            let dividi = parseInt(digito1) / parseInt(digito2);
            divicao.textContent = `Divisão = ${dividi}`;

            let resto_divicao = document.querySelector('.resto');
            resto_divicao.addEventListener('click', restou);
            function restou() {
              let resto = parseInt(digito1) % parseInt(digito2);
              resto_divicao.textContent = `Resto da divisão = ${resto}`;

              let raiz2 = document.querySelector('.potencia2');
              raiz2.addEventListener('click', raiz_quadrada);
              function raiz_quadrada() {
                let potencia2 = parseInt(digito1) ** parseInt(digito2);
                raiz2.textContent = `Raiz quadrada = ${potencia2}`;
                  }
                }
              }
            }
          }
        }
      }
    }
    // INCLEMENTO E DECLEMENTO (também nominados de pós inclemento e pós decremento)
    let entrada2 = document.querySelector('.entra1');
    entrada2.addEventListener('click', clementar1);
    function clementar1() {
      let entra1 = prompt();
      entrada2.textContent = `Atribuição = ${entra1}`;

      let inclepos = document.querySelector('.inclemen_pos');
      inclepos.addEventListener('click', pos_clementa);
      function pos_clementa() {
        let inclemen_pos = parseInt(entra1++);
        inclepos.textContent = `O inclemento após a atribuição, a mesma não é alterada veja: ${inclemen_pos}`

        let posclen = document.querySelector('.pos_in');
        posclen.addEventListener('click', atribui_pos);
        function atribui_pos() {
          let pos_in = parseInt(entra1)
          posclen.textContent = pos_in
              
        let declepos = document.querySelector('.declemen_pos');
        declepos.addEventListener('click', pos_declemen);
        function pos_declemen() {
          let declemen_pos = parseInt(entra1--);
          declepos.textContent =  `O declemento após a atribuição, também não altera veja: ${declemen_pos}`;

          let posdecle = document.querySelector('.pos_de');
          posdecle.addEventListener('click', atribui_posde);
          function atribui_posde() {
            let pos_de = parseInt(entra1)
            posdecle.textContent = pos_de
            }
          }
        }
      }
    }

    let entrada3 = document.querySelector('.entra2');
    entrada3.addEventListener('click', clementar2);
    function clementar2() {
      let entra2 = prompt();
      entrada3.textContent = `Atribuição = ${entra2}`;

      let prein = document.querySelector('.inclemen_pre');
      prein.addEventListener('click', pre_clementar);
      function pre_clementar() {
        let inclemen_pre = parseInt(++entra2);
        prein.textContent = `Ao contrário do pós o pré clemento, já altera a atribuiçã: ${inclemen_pre}`;

        let predecle = document.querySelector('.declemen_pre');
        predecle.addEventListener('click', pre_declementar);
          function pre_declementar() {
          let declemen_pre = parseInt(--entra2);
          predecle.textContent = `Assim também é no declemento: ${declemen_pre}`;
          }
        }
      } 
