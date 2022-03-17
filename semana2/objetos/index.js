 /* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
 
// Vai ser impresso o nome Matheus Nachtergaele.
// Matheus Nachtergaele
// Canal Brasil, ,19h



const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// Juca, 3, SRD
// Juca, 3, SRD, Juba
// Juca, 3, SRD, Juba, Jubo
// Copia os valores


function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// Não sei o que aconteceu.

*/

const objeto = {
    nome: 'Rafael',
    apelidos: ['Rafa', 'Fael', 'Rafinha']
}

function funcao (frase) {
    return frase
}
funcao('Meu nome é ' + objeto.nome + ', mas pode me chamar de: ' )
console.log(frase)