const carro1 = prompt('Informe o 1o carro: ')
const entrada1 = prompt('Informe a velocidade: ')
const carro2 = prompt('Informe o 2o carro: ')
const entrada2 = prompt('Informe a velocidade: ')

const velocidade1 = parseFloat(entrada1)
const velocidade2 = parseFloat(entrada2)

if(velocidade1 > velocidade2){
  alert(carro1+ ' é mais rapido. Velocidade '+velocidade1)
}else if(velocidade1 < velocidade2){
  alert(carro2+ ' é mais rapido. Velocidade '+velocidade2)
}else{
  alert('Velocidade iguais: '+velocidade1)
}


