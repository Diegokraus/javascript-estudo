const personagem1 = prompt("Informe o nome personagem Atacante")
let poderAtaque = prompt("Informe o poder de Ataque")

const personagem2 = prompt("Informe o nome personagem Defensor")
let pontosVida = parseInt(prompt("Informe a quantidade de pontos de vida"))
const poderDefesa = parseInt(prompt("Informe o poder de defesa"))
let escudo = prompt("Possui escudo?")

if(escudo === 'sim'){
    escudo = true
}else{
    escudo = false
}

let danoCausado = 0

if(poderAtaque > poderDefesa && !escudo){
    danoCausado = poderAtaque - poderDefesa
}else if(poderAtaque > poderDefesa && escudo){
    danoCausado = (poderAtaque - poderDefesa) / 2
}

pontosVida -= danoCausado

alert(`Atacante: ${personagem1} causou ${danoCausado} pontos de dano em ${personagem2}`)
alert(`Atacante: ${personagem1} poder de ataque ${poderAtaque} \n\n\
    defensor: ${personagem2} pontos de vida: ${pontosVida}\n
    poder de defesa: ${poderDefesa} possui escudo: ${escudo}`)
