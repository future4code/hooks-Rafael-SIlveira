/* const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

a) O código pede um número pro usuário e compara pra ver se é ímpar ou par.

b) Para números pares.

c) Para números ímpares.



let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
   // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

) Para retornar ao usuário o preço da fruta escolhida por ele.

b) O preço da maçã é R$ 2.25.

c) Vai retornar o valor do default 


const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) Está pedindo ao usuário um número

b) Esse número passou no teste. Undefined.

c) Sim, porque uma variável foi definida dentro da função if. 


const idade = Number(prompt("Digite sua idade."))

if (idade >= 18) {
    console.log('Você já pode dirigir.')
}
else if (idade < 18) {
    console.log('Você não pode dirigir.')
}



function retornaTurno (dia, tarde, noite) {

if (dia === 'M') 
{
    return 'Bom dia.'
}
else if (tarde === 'V') 
{
    return 'Boa tarde!'
}
else (noite === 'N')
{
    return 'Boa noite!'
}
}
const turno = prompt('Digite de acordo com seu turno: M (matutino) ou V (Vespertino) ou N (Noturno).')

console.log(retornaTurno(turno))




let turno = prompt("Digite de acordo com seu turno: M (matutino) ou V (Vespertino) ou N (Noturno).")
let frase
switch (turno) {
  case "M":
    frase = 'Bom dia'
    break;
  case "V":
    frase = 'Boa tarde'
    break;
  case "N":
    frase = 'Boa noite'
    break;
  default:
    frase = 'Bem vindo'
    break;
}
console.log (frase)

let genero = prompt("Qual o gênero de filme que você vai assistir?")
let preco = prompt("Qual o preço do ingresso?")
let frase
switch (preco < 15, genero) {
  case "Fantasia":
    frase = 'Bom filme'
    break;
  default:
    frase = 'Tente outro.'

}
console.log (frase)
*/
