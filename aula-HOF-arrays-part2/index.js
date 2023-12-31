const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]


// const nomes = []
// for(let i = 0; i < personagens.length; i++){
//   nomes.push(personagens[i].nome)
// }
// console.log(nomes)


//MAP
// const nomes = personagens.map(function(p){
//   return p.nome
// })
// console.log(nomes)


// ------------------------------------------------
//FILTER
// const orcs = []

// for (let i = 0; i < personagens.length; i++) {
//   if(personagens[i].raca === 'Orc'){
//     orcs.push(personagens[i])
//   }  
// }
// console.log(orcs)

// const orcs = personagens.filter(function(personagem){
//   return personagem.raca === "Orc"
// })
// console.log(orcs)

// ----------------------------------------

//REDUCE
// const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
//   return valorAcumulado + personagem.nivel
// }, 0)
// console.log(nivelTotal)

// const racas = personagens.reduce(function(valorAcumulado, personagem){
//   if(valorAcumulado[personagem.raca]){
//     valorAcumulado[personagem.raca].push(personagem)
//   }else{
//     valorAcumulado[personagem.raca] = [personagem]
//   }
//   return valorAcumulado
// }, {})
// console.log(racas)

// ---------------------------------------------------

//SORT - altera o array original
const personagensOrdenados = personagens.slice().sort(function(a, b){
  return b.nivel - a.nivel
})
console.log(personagens)
console.log(personagensOrdenados)
