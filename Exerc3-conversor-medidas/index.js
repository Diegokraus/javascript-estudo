const entrada= prompt('Informe o valor em METROS: ')
const opcao= prompt('Converter para: (mm) (cm) (dm) (dam) (hm) (km) ')
const metros = parseFloat(entrada)

let resultado=0;


switch(opcao){
  case 'mm':
    resultado = metros * 1000;
    alert(`${metros} Metros = ${resultado} ${opcao}`) 
    break
  case 'cm':
    resultado = metros * 100;
    alert(`${metros} Metros = ${resultado} ${opcao}`) 
    break
  case 'dm':
    resultado = metros * 10;
    alert(`${metros} Metros = ${resultado} ${opcao}`) 
    break1
  case 'dam':
    resultado = metros / 10;
    alert(`${metros} Metros = ${resultado} ${opcao}`) 
    break
  case 'hm':
    resultado = metros / 100;
    alert(`${metros} Metros = ${resultado} ${opcao}`) 
    break
  case 'km':
    resultado = metros / 1000;
    alert(`${metros} Metros = ${resultado} ${opcao}`) 
    break
  default:
    alert('opção inválida!')


}







