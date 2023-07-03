let opcao = null
let valorAc = 0

let entrada = prompt('Informe o valor Inicial de dinheiro disponível (R$) = ')
let valor = parseFloat(entrada)

valorAc = valor

do {
  let op= prompt('Valor disponível (R$) = ' + valorAc + '\n\nMENU DE OPÇÕES: \n\n1-Depositar dinheiro \n2-Sacar dinheiro \n3-Sair ') 
  opcao = parseInt(op)

  switch(opcao){
    case 1:
      valor = parseFloat(prompt('Valor para adicionar (R$) = '))
      valorAc += valor
      break
    case 2:
      entrada = prompt('Valor para remover (R$) = ')
      valor = parseFloat(entrada)
      valorAc -= valor
      break
    case 3:
      alert('Encerrando...')
      break
    default:
      alert('Opção inválida...')
  }
}while(opcao !== 3)




