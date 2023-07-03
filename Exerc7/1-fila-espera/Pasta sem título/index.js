let pacientes = [];
let menu = "";

do {
  menu = prompt(
    `Lista de Pacientes: ${pacientes} \n1-Novo Paciente 2-Consultar Paciente 3-Sair`
  );

  switch (menu) {
    case "1":
      const nome = prompt("informe o nome do paciente");
      pacientes.push(nome);
      console.log(pacientes);
      break;

    case "2":
      const consultado = pacientes.shift();
      alert("Paciente consultado: " + consultado);
      break;

    case "3":
      alert("Saindo...");
      break;

    default:
      alert("Opcao Invalida...");
      break;
  }
} while (menu !== "3");
