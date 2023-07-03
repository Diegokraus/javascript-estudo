const character1 = prompt('Informe personagem atacante: ')
const inputAttack = prompt('Informe o poder de ataque: ')

const character2 = prompt('Informe personagem defensor: ')
let inputLifePoints = prompt('Informe quantas vidas: ')
const inputDefensePower = prompt('Informe poder de defesa: ')
const shield = prompt('Informe se possui escudo: (s/n)')


const attack = parseInt(inputAttack)
let lifePoints = parseInt(inputLifePoints)
const defensePower = parseInt(inputDefensePower)


let damage = 0


if(attack > defensePower && shield === 'n'){
  damage = attack - defensePower
}else if(attack > defensePower && shield === 's'){
  damage = (attack - defensePower)/2
}

lifePoints -= damage

alert(`Atacante: ${character1} causou: ${damage} pontos de dano em: ${character2}`)

alert(
  `Atacante: ${character1} \nPoder de ataque: ${attack}\n\n
  Defensor: ${character2} \nPontos de vida: ${lifePoints}\n
  Poder de defesa: ${defensePower} \nPossui escudo: ${shield}`
)



