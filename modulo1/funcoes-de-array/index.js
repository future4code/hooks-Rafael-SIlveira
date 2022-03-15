/* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  }) 

  // mostra cada item 

  const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

// vai retonar uma array apenas com os nomes 

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)

  // vai retornar todos itens diferentes de Chijo 

  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
  ]
    const arrayNomes = pets.map((item, index, array) => {
        return item.nome
     })
     console.log (arrayNomes)

     const retornaSalsicha = pets.filter((item, index, array) => {
        return item.raca === 'Salsicha'
     })
     
     console.log(retornaSalsicha)

     const mensagemCupom = pets.filter((item, index, array) => {
        return item.raca === 'Poodle'
     })
     
     console.log(`Você ganhou ${mensagemCupom}`)
   

     const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
     ]
     const arrayNomes = produtos.map((item, index, array) => {
        return item.nome
     })
     console.log (arrayNomes)

     const arrayNome= produtos.map((produtos) => {
        return { nome: produtos.nome,
        preco: produtos.preco * 15 / 100}
        
     })
     
     console.log (arrayNome)

     const arrayBebidas = produtos.filter((item, index, array) => {
        return item.categoria === 'Bebidas'
     })
     console.log (arrayBebidas)  */