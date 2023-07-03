const turista= prompt('Informe o nome do turista:')

let cidades = ""
let cont = 0

let resposta= prompt('Já visitou alguma cidade? (sim / nao)')

while(resposta === 'sim'){

  let cidade = prompt('Qual o nome da cidade?')
  cidades +=" - " +cidade+ "\n"
  cont++

  resposta= prompt('Já visitou alguma outra cidade? (sim / nao)')
}

alert(`Turista: ${turista} \nTotal de cidades visitadas: ${cont} \nNome das cidades visitadas:\n${cidades}`)





