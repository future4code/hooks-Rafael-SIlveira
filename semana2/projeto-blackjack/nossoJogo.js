let mensagemBoasVindas = 'Boas Vindas ao jogo de BlackJack!'
console.log(mensagemBoasVindas)



if (confirm("Quer iniciar uma nova rodada?")){
   console.log('Você entrou no jogo.')
   
}
else {
   console.log('Fim de jogo.')
}
   const jogador1 = comprarCarta()
   const computador1 = comprarCarta()
   const jogador2 = comprarCarta()
   const computador2 = comprarCarta()
   let jogadorPontos = jogador1.valor + jogador2.valor
   let computadorPontos = computador1.valor + computador2.valor
  
   console.log(`Suas cartas: ${jogador1.texto} e ${jogador2.texto}. Pontuação: ${jogadorPontos}`)
   console.log(`Cartas do computador: ${computador1.texto} e ${computador2.texto}. Pontuação: ${computadorPontos}`)


if (jogadorPontos > computadorPontos) {
   console.log('Você ganhou')
}
else if (computadorPontos > jogadorPontos ) {
   console.log('Você perdeu')
}
else {
   console.log ('Empatou')
}
