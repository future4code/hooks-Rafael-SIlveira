// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01


function retornaTamanhoArray(array) {
    return array.length
}
retornaTamanhoArray[1,2,3,4,5]

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}
retornaArrayInvertido[1,2,3,4,5]

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function (a, b){
      if (a < b )  return -1
      if (b > a) return  1
      return 0
  })
  return array
}


// EXERCÍCIO 04
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

function retornaNumerosPares(array) {
   {
      if (array % 2 == 0) 
      return array;
  }
  let numerosPares = numeros.filter(retornaNumerosPares);
  console.log(numerosPares);
  
}

// EXERCÍCIO 05
let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

function retornaNumerosParesElevadoa2(array) {
   {
      if (array % 2 == 0) 
      return array;
  }
  let numerosPares = numeros2.filter(retornaNumerosParesElevadoa2);
  console.log(numerosPares);
  
}

// EXERCÍCIO 06
let numero = [1,2,3,4,5,6,7]
function retornaMaiorNumero(array){
return Math.max(...array);
}
console.log(retornaMaiorNumero(arr));

// EXERCÍCIO 07
int x = 10;
int y = 20;
if (x < y) {
    System.out.println("X é menor que Y.");
} else {
    System.out.println("X é maior ou igual a Y.");
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}