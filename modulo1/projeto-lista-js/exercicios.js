// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
      
      return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  let mensagem1 = prompt('Digite uma mensagem!')
  console.log(mensagem1)
}


// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

let altura = Number(prompt('Digite a altura do triângulo.'))
let largura = Number(prompt('Digite a largura do triângulo.'))
let area = largura * altura
console.log(area)
 
}



 // EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt('Digite o ano atual.'))
  let anoNasc = Number(prompt('Digite o seu ano de nascimento.'))
  let suaIdade = anoAtual - anoNasc
  console.log(suaIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 
  let imc = peso / (altura * altura)
  return imc
}
calculaIMC(59, 1.65)
  

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nome = prompt('Qual é o seu nome?')
  const idade = Number(prompt('Qual é a sua idade?'))
  const email = prompt('Qual é o seu e-mail?')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Diga sua cor favorita.')
  const cor2 = prompt('Diga sua segunda cor favorita.')
  const cor3 = prompt('Diga sua terceira cor favorita.')

  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

return string.toUpperCase()
}
retornaStringEmMaiuscula('Oi')

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
let vender = custo / valorIngresso
return vender
}
calculaIngressosEspetaculo(3000,100)
// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

let trueOrFalse = string1.length === string2.length
return trueOrFalse 
}
checaStringsMesmoTamanho('ola mundo', 'jey jude')


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

return array [0]
}
retornaPrimeiroElemento([1,2,3,4])


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  
return array [array.length - 1]
}
retornaUltimoElemento([1,2,3,4])


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
array.push [5]


}

trocaPrimeiroEUltimo([1, 2, 3, 4])


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let trueOrFalse = string1 === string2
  return trueOrFalse
}
checaIgualdadeDesconsiderandoCase('ola', 'oLA')

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}