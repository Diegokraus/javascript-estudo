let valor = 0;
let opcao = "";

let valorTotal = parseFloat(
  prompt("Quantidade Inicial de Dinheiro Disponivel")
);

do {
  opcao = prompt(
    `Valor Disponivel: ${valorTotal} \n\n1)Adicionar dinheiro \n 2)Remover dinheiro \n3)sair`
  );

  switch (opcao) {
    case "1":
      valor = parseFloat(prompt("Informe o valor a ser adicionado:"));
      valorTotal += valor;
      break;
    case "2":
      valor = parseFloat(prompt("Informe o valor a ser retirado:"));
      valorTotal -= valor;
      break;
    case "3":
      alert("saindo...");
      break;

    default:
      alert("Opcao Invalida!");
  }
} while (opcao !== "3");
