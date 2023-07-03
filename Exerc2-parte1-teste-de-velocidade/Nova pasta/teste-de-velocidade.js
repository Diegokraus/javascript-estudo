const car1 = prompt('Informe o veiculo 1:')
const input1 = prompt('Velocidade:')
const car2 = prompt('Informe o veiculo 2:')
const input2 = prompt('Velocidade:')

const speed1 = parseInt(input1)
const speed2 = parseInt(input2)

if(speed1 > speed2){
  alert(`O ${car1} é mais rápido velocidade: ${speed1} km/h.`)
}else if(speed1 < speed2){
  alert(`O ${car2} é mais rápido velocidade: ${speed2} km/h.`)
}else if(speed1 === speed2){
  alert(`O ${car1} e o ${car2} tem a mesma velocidade: ${speed1} km/h.`)
}