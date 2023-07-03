const pilha = []
let opcao = ''

do {
  opcao = prompt('Cartas do baralho:' + '\n' + pilha.length + '\nMENU DE OPÇÕES: \n1-Adicionar uma carta \n2-Puxar uma carta \n3-Sair ') 

  switch(opcao){
    case '1':
      const novaCarta = prompt('Informe o nome da carta')
      pilha.push(novaCarta)
      break
    case '2':
      const cartaRemovida=pilha.pop();
      if(cartaRemovida){
        alert('paciente chamado:\n' + cartaRemovida)
      } else{
        alert('Não há cartas na pilha.')
      }
      break
    case '3':
      alert('Encerrando...')
      break
    default:
      alert('Opção inválida...')
  }
}while(opcao !== '3')




