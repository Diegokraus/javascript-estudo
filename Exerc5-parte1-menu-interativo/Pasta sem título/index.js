let opcao = "";

do {
  opcao = prompt(
    "Menu" +
      "\n1-Opçao1" +
      "\n2-Opçao2" +
      "\n3-Opçao 3" +
      "\n4-Opçao 4" +
      "\n5-Encerrar"
  );

  switch (opcao) {
    case "1":
      alert(`opcao escolhida: ${opcao}`);
      break;
    case "2":
      alert(`opcao escolhida: ${opcao}`);
      break;

    case "3":
      alert(`opcao escolhida: ${opcao}`);
      break;

    case "4":
      alert(`opcao escolhida: ${opcao}`);
      break;

    case "5":
      alert(`Encerrando programa...`);
      break;

    default:
      alert(`Opcao invalida!`);
  }
} while (opcao !== "5");
