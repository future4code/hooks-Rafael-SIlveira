/* let array
console.log('a. ', array)
// indefinido

array = null
console.log('b. ', array)
//null 

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// vai mostrar a quantidade de caracteres digitados, que são 11

let i = 0
console.log('d. ', array[i])
// vai mostrar o array 0, que seria o 3 

array[i+1] = 19
console.log('e. ', array)
// não sei

const valor = array[i+6]
console.log('f. ', valor)
// não sei também 


const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// será impresso "SUBI NUM ÔNIBUS EM MIRROCOS", com 27 caracteres.



const nome = prompt("Digite o seu nome.")
const email = prompt('Digite seu e-mail.')

console.log('O e-mail ' + (email) + ' foi cadastrado com sucesso. Seja bem-vinda(o), '
 + (nome) + '!')



 /* let comidas = ['Pão', ' frango', ' bolo', ' pizza', ' sanduíche.']
 
 console.log (comidas)

 console.log ('Essas são minhas comidas preferidas: ' + comidas)

 const comidaUser = prompt("Qual é sua comida preferida?")

 let i = 1
 const troca = comidas.replaceAll(i, comidaUser)
 console.log(troca)

  */



 let userTask = prompt('Digite 3 tarefas que você realiza no dia a dia.')

 let listaDeTarefas = userTask
 
 console.log(listaDeTarefas )