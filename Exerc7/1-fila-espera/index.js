let opcao = null
const fila = []

do {
  let pacientes = ''
  for(let i=0; i < fila.length; i++){
    pacientes += (i+1) + ' - ' + fila[i] + '\n'
  }

  let op= prompt('Lista de Pacientes:' + '\n' + pacientes + '\nMENU DE OPÇÕES: \n1-Novo Paciente \n2-Consultar Paciente \n3-Sair ') 
  opcao = parseInt(op)

  switch(opcao){
    case 1:
      const novoPaciente = prompt('Informe o nome do paciente')
      fila.push(novoPaciente)
      break
    case 2:
      const pacienteConsultado=fila.shift();
      if(pacienteConsultado){
        alert('paciente chamado:\n' + pacienteConsultado)
      } else{
        alert('Não há pacientes na fila.')
      }
      break
    case 3:
      alert('Encerrando...')
      break
    default:
      alert('Opção inválida...')
  }
}while(opcao !== 3)




