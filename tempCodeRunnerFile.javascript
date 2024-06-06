


let num = 7;
let num1= 10;
do{
    console.log(`${num} x ${num1} = ${num * num1}`)
    num1++
}while(num1 <= 10)


let textoComQuebraLinha = "Olá, mundo!\\nBem-vindo ao JavaScript.";
let textoFormatado = textoComQuebraLinha.replace(/\\n/g, '\n');
console.log(textoFormatado);

let nome = "Lucas";
let mensagem = "Olá, " + nome + "!\nBem-vindo ao nosso site.";
console.log(mensagem);

let nuns = ( n1, n2 ) => {
    return nuns = n1 * n2
    }
    console.log (nuns ( 5, 3 ))

    