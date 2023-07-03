
let opcao = null

do {
  let op= prompt('MENU DE OPÇÕES: \n\n1-Cadastrar Cliente \n2-Cadastrar Produto \n3-Imprimir relatório \n4-Mudar senha \n5-Encerrar ')
  
  opcao = parseInt(op)

  switch(opcao){
    case 1:
      alert('Cadastrando cliente...')
      break
    case 2:
      alert('Cadastrando produto...')
      break
    case 3:
      alert('Imprimindo relatório...')
      break
    case 4:
      alert('Alterando a senha...')
      break
    case 5:
      alert('Encerrando...')
      break
    default:
      alert('Opção inválida...')
  }
}while(opcao !== 5)




