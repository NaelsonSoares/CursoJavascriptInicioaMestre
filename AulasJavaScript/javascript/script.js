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
let entrada1 = document.querySelector('.digita');
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

                     // OPERADOR TERNÁRIO
                let notas = document.querySelector('.media');
                notas.addEventListener('click', exemplo);
                function exemplo() {
                    let media = ( parseInt(digito1) + parseInt(digito2 ) ) / 2;
                    notas.textContent = ( media >= 5 ) ? "Aprovado" : "Reprovado"; 
                   }
                  }
                }
              }
            }
          }
        }
      }
    }

    // INCLEMENTO E DECLEMENTO (também nominados de pós inclemento e pós decremento)
    let entrada2 = document.querySelector('.digita3');
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

    let entrada3 = document.querySelector('.digita4');
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

      // OPERADORES DE COMPARAÇÃO E CONDICIONA IF ELSE
      let entrada4 = document.querySelector('.digita5');
      entrada4.addEventListener('click', comparar1);
      function comparar1() {
        let digita5 = prompt();
        entrada4.textContent = digita5

        let entrada5 = document.querySelector('.digita6');
        entrada5.addEventListener('click', compara);
        function compara() {
          let digita6 = prompt();
          entrada5.textContent = digita6;

          let ivalor = document.querySelector(`.i_valor`);
          ivalor.addEventListener('click', igual_valor);
          function igual_valor() {
           if ( digita5 == digita6 ) {
            ivalor.textContent = ` ${digita5} e ${digita6} tem os seus valores iguais (= =). `;
           } else {
            ivalor.textContent = ` ${digita5} e ${digita6} tem os seus valores diferentes (!=). `;
           }

            let ivTipo = document.querySelector('.i_vTipo');
            ivTipo.addEventListener('click', igual_vtipo);
            function igual_vtipo() {
                if ( digita5 === digita6 ) {
                    ivTipo.textContent = ` ${digita5} e ${digita6} tem os seus valores e tipos iguais (= = =). `
                } else {
                    ivTipo.textContent = ` ${parseInt(digita5)} e ${digita6} tem os seus valores e tipos diferentes (!= =). `
                }
                
              let menor = document.querySelector('.menorq');
              menor.addEventListener('click', menor_q);
              function menor_q() {
                if ( digita5 < digita6 ) {
                    menor.textContent = ` ${digita5} É menor que (<) ${digita6}. `;
                } else if ( digita5 > digita6 ) {
                    menor.textContent = ` ${digita5} É maior que (>) ${digita6}. `;
                } else {
                    menor.textContent = 'Tem valores iguais'
                }

                  let meIgual = document.querySelector('.me_igual');
                  meIgual.addEventListener('click', me_Igual);
                  function me_Igual() {
                    if (  digita5 <= digita6 ) {
                        meIgual.textContent =  ` ${digita5} é menor ou igual a (<=) ${digita6}. `;
                    } else {
                        meIgual.textContent = `${digita5} é maior ou igual a (>=) ${digita6}. `;
                    }
                    let maIgual = document.querySelector('.ma_igual');
                    maIgual.addEventListener('click', ma_Igual);
                    function ma_Igual() {
                      let ma_igual = digita5 >= digita6
                      maIgual.textContent = `${digita5} é maior ou igual a (>=) ${digita6}? ${ma_igual}`;
                  }
                }                
              }
            }
          }
        }
      }

      // OPERADORES LÓGICOS
      /* TABELA DE USO DOS OPERADORES LÓGICOS
                                                                            OPERADORES  
      EXPRESSÃO ( A )       EXPRESSÃO ( B )          &&               ||     
            TRUE                        TRUE                    TRUE          TRUE        
            TRUE                        FALSE                   FALSE         TRUE
            FALSE                       TRUE                    FALSE         TRUE
            FALSE                       FALSE                   FALSE         FALSE

        OPERADOR DE NEGAÇÃO ( ! )
      EXPRESSÃO ( C )       ( !C )  NEGAÇÃO DE ( C )
        TRUE                      FALSE
        FALSE                    TRUE  */
      
      let entrada6 = document.querySelector('.digita7');
      entrada6.addEventListener('click', idade);
      function idade() {
        let digita7 = prompt();
        entrada6.textContent = digita7;

        let entrada7 = document.querySelector('.digita8');
        entrada7.addEventListener('click', responsavel);
        function responsavel() {
          let digita8 = prompt();
          entrada7.textContent = digita8;

          let entrada8 = document.querySelector('.digita9');
          entrada8.addEventListener('click', passagem);
          function passagem() {
            let digita9 = prompt();
            entrada8.textContent = digita9

            let confirme = document.querySelector('.resposta');
            confirme.addEventListener('click', conferi)
            function conferi() {              
              if( (digita7 >= 18 || digita8 == 'sim') && digita9 == 'sim' ) {
                confirme.textContent ='Autorizado a embarca';
              } else{
                  confirme.textContent = 'Não Autorizado a embarca';                
              }
            }
          }
        }
      }

      /*VALORES FALSY E TRUTHY
      VALORES = 0 (ZERO), " ", NaN, UNDEDFINED, NULL, FALSE
      OS DEMAIS SÃO TRUTHY.
      if (  ) {
        console.log('true')
      } else {
        console.log('false')
      */

      // CONDICIONAL SWITCH
      let entrada9 = document.querySelector('.digita10');
      entrada9.addEventListener('click', diasemana);
      function diasemana( ) {
        let digita10 = prompt();
        entrada9.textContent = digita10;

        let dias = document.querySelector('.diaseman');
        dias.addEventListener('click', odia);
        function odia( ) {
            let diaseman = parseInt(digita10);
            
            switch( diaseman ) {
            case 0:
                        diaseman = 'Domingo'
                    break
            case 1:
                        diaseman = 'Segunda-feira'
                    break
            case 2:
                        diaseman = 'Terça-feira'
                    break
             case 3:
                        diaseman = 'Quarta-feira'
                    break
            case 4:
                        diaseman = 'Quinta-feira'
                    break
            case 5:
                        diaseman = 'Sexta-feira'
                    break
            case 6:
                        diaseman = 'Sábado'
                    break
            default:
                        diaseman = ' digita um número entre 0 e 6 '
          }
                dias.textContent = diaseman;
        }     
      }

      // CALCULADORA COM SWITCH
    let entrada10 = document.querySelector('.digita11');
    entrada10.addEventListener('click', numero1);
    function numero1( ) {
        let digita11 = parseInt( prompt( ) );
        entrada10.textContent = digita11;

        let entrada11 = document.querySelector('.digita12');
        entrada11.addEventListener('click', numero2);
        function numero2( ){
            let digita12 = parseInt( prompt( ) );
            entrada11.textContent = digita12;

            let calculo = document.querySelector('.calcular');
            calculo.addEventListener('click', operacao);
            function operacao() {
                let calcular = parseInt( prompt( ) )
                
                 switch( calcular) {
                    case 0:
                        calcular = digita11 + digita12
                        break
                    case 1:
                        calcular = digita11 - digita12
                        break
                    case 2:
                        calcular = digita11 * digita12
                        break
                    case 3:
                        calcular = digita11 / digita12
                        break
                    case 4:
                        calcular = digita11 % digita12
                        break
                    case 5:
                        calcular = digita11 ** digita12
                        break
                    default:
                        calcular = "Essa opção não é válida! ";
                }                
                calculo.textContent = calcular;
            }
        }
    }

    //LOOP WHILE
    let entrada12 = document.querySelector('.digita13');
    entrada12.addEventListener('click', contador);
    function contador( ) {
        let digita13 = parseInt(prompt());
        entrada12.textContent = digita13;
        
        let tabular = document.querySelector('.tabuada');
        tabular.addEventListener('click', calculos);
        function calculos(){
            let tabuada = 0
                while(tabuada <= 10){
                   tabular.textContent += (` ${tabuada } x ${digita13 } = ${ tabuada * digita13} \n`  )
                        tabuada++
                }
            }
        } 