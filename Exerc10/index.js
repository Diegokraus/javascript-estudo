const vagas = []

function listarVagas(){
  const vagasEmTexto = vagas.reduce(function(textoFinal,vaga, indice){
    textoFinal += indice + ". "
    textoFinal += vaga.nome
    textoFinal += "(" + vaga.candidatos.lenght + " candidatos)\n"
    return textoFinal
  },"")
  alert(vagasEmTexto)
}

function novaVaga(){
  const nome = prompt("informe um nome para a vaga: ")
  const descricao = prompt("informe uma descrição para a vaga: ")
  const dataLimite = prompt("informe uma data limite (dd/mm/aaaa0 para a vaga")

  const confirmacao = confirm(
    "deseja criar um nova vaga com essas informações?\n" +
    "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
  )

  if(confirmacao){
    const novaVaga = {nome, descricao, dataLimite, candidatos:[]}
    vagas.push(novaVaga)
    alert("Vaga criada")
  }
}

function exibirVaga(){
  const indice = prompt("informe o indice da vaga que deseja exibir:")
  const vaga = vagas[indice]

  const condidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
    return textoFinal + "\n - " + candidato
  },"")

  alert(
    "vaga nº " + indice +
    "\nNome: " + vaga.nome +
    "\nDescrição: " + vaga.descricao +
    "\nData Limite: " + vaga.dataLimite +
    "\nQuantidade de candidatos: " +vaga.candidatos.lenght+
    "\nCandidatos inscritos: " + candidatosEmTexto
  )
}

function inscreverCandidato(){
  const candidato = prompt("informe o nome do candidato:")
  const indice = prompt("informe o indice da vaga para a qual o candidato deseja de inscrever:")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Deseja inscrever o candidato " + candidato + "na vaga" + indice + "?\n" +
    "Nome: " + vaga.nome + "Descrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite 
  )

  if(confirmacao){
    vaga.candidatos.push(candidato)
    alert("incrição realizada")
  }
}

function excluirVaga(){
  const indice = prompt("inform o indice da vaga que deseja excluir: ")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
    "Nome: " +vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite
  )

  if(confirmacao){
    vagas.splice(indice, 1)
    alert("vaga excluida.")
  }
}

function exibirMenu(){
  const opcao = prompt(
  "Cadastro de vagas de Emmprego" +
  "\nEscolha um das opções:" +
  "\n1. Listar vagas disponiveis" +
  "\n2. Criar uma nova vaga." +
  "\n3Visualizar  uma vaga" +
  "\n4. Inscrever um candidato" +
  "\n5. Excluir uma vaga" +
  "\n6. Sair"
  )
  return opcao
}


function executar(){
  let opcao = ""

  do{
    opcao = exibirMenu()

    switch(opcao){
      case "1":
        listarVagas()
        break
      case "2":
        novaVaga()
        break
      case "3":
        exibirVaga()
        break
      case "4":
        inscreverCandidato()
        break
      case "5":
        excluirVaga()
        break
      case "6":
        alert("saindo...")
        break
      default:
        alert("opcao invalida.")
    }
  }while(opcao !== "6")
}

executar()


