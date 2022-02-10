/* 
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

// vai dar false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

//vai dar false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

// vai dar false 

console.log("d. ", typeof resultado)

// booleans


let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

os números não irão somar, pois o prompt de comando 
imprime apenas strings, então precisaria fazer a 
conversão para números.

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

*/



/* EXERCÍCIO 1

let idade = Number(prompt("Quantos anos você tem?"))
let idadeBf = Number(prompt("Quantos anos seu melhor amigo(a) tem?"))

const idadeComparar = idade > idadeBf

console.log('Sua iade é maior do que a do seu melhor amigo(a)? ' + idadeComparar)

console.log(idade - idadeBf)

*/


/* EXERCÍCIO 2 

let numPar = Number(prompt('Insira aqui um número par.'))

const resto = numPar % 2

console.log (resto)
// com números pares o resultado é sempre 0.
Com números ímpares sempre sobra 1

*/



/* EXERÍCIO 3

let idade = Number(prompt("Quantos anos você tem?"))

const mesesIdade = idade * 12

const diasIdade = idade * 365

const horasIdade = idade * (24 * 365)

console.log(mesesIdade, diasIdade, horasIdade)

*/



/* EXERCÍCIO 4

let numb1 = Number(prompt('Insira aqui um número.'))
let numb2 = Number(prompt('Insira aqui outro número.'))

const maior = numb1 > numb2

console.log (maior)

const igual = numb1 === numb2

console.log (igual)

let divide = numb1 % numb2 == 0

console.log (divide)

const divide2 = numb2 % numb1 == 0 

console.log (divide2) 
*/ 