const nome = prompt("Nome do turista:");
let cidades = "";
let flag = "nao";
let cont = 0;

flag = prompt("Visitou alguma cidade? (sim / nao)");
if (flag === "sim") {
  cidades += prompt("Qual a cidade visitada:");
  cont++;
}

while (flag !== "nao") {
  flag = prompt("Visitou alguma cidade? (sim / nao)");

  if (flag === "sim") {
    cidades += prompt("Qual a cidade visitada:");
    cont++;
  }
}

alert(
  `Nome turista: ${nome} \ncidades visitadas: ${cidades} \nTotal de cidades visitatas: ${cont}`
);
