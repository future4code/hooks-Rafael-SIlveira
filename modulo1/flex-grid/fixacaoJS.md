function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  
  let numero = 0
    for (let i = 0 ; i < arrayDeNumeros.length ; i ++){
      if (arrayDeNumeros [i] === numeroEscolhido){
        numero = numero + 1
      }
    }
      if (numero === 0){
        return "Nenhum número foi encontrado."
      }