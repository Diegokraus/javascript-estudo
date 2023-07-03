const imoveis = []
let opcao = ''

do {
  opcao = prompt('Imóveis cadastrados:' + '\n' + imoveis.length + '\nMENU DE OPÇÕES: \n1-Salvar novo imóvel \n2-Mostrar imóveis \n3-Sair ') 

  switch(opcao){
    case '1':
      const imovel = {}

      imovel.nome = prompt('Informe o nome do proprietário:')
      imovel.quartos= parseInt(prompt('Quantidade de quartos:'))
      imovel.banheiros = parseInt(prompt('Quantidade de banheiros:'))
      imovel.garagem = prompt('Possui garagem? (sim/não)')

      const confirmacao = confirm(
        'Salvar este imóvel?\n'+
        '\nProprietario: '+imovel.nome+
        '\nQuartos: '+imovel.quartos+
        '\nBanheiros: '+imovel.banheiros+
        '\nPossui garagem? '+imovel.garagem)
      
      if(confirmacao){
        imoveis.push(imovel)
        alert('Imóvel salvo com sucesso...')
      }else{
        alert('Voltando ao menu...')
      }
      break
    case '2':
      for(let i = 0; i < imoveis.length; i++){
        alert(
          'Imóvel '+(i+1)+
          '\nProprietário: ' + imoveis[i].nome +
          '\nQuartos: ' + imoveis[i].quartos +
          '\nBanheiros: ' + imoveis[i].banheiros + 
          '\nPossui garagem? ' + imoveis[i].garagem
        )
      }
      break
    case '3':
      alert('Encerrando...')
      break
    default:
      alert('Opção inválida...')
  }
}while(opcao !== '3')




