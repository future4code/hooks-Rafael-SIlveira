let anoNasc
let idadeAtual 

anoNasc =  Number(prompt('Em qual ano você nasceu?'))
idadeAtual = Number(prompt('Quantos anos você vai fazer no ano atual?'))
alert('O ano atual é ' + (anoNasc+idadeAtual) + '.')

console.log(anoNasc+idadeAtual)

let diasTrab 
let valeMensal

diasTrab = Number(prompt('Quantos dias você trabalhou mês passado?'))
valeMensal = Number(prompt('Qual o valor que você recebeu de Vale-Refeição?'))
alert('Você recebeu ' + (valeMensal/diasTrab) + ' reais por dia trabalhado.')

console.log(valeMensal / diasTrab)