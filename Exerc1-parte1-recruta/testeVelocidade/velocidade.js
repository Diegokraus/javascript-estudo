const carro1 = prompt("Informe carro1")
const velocidade1 = Number(prompt("Informe velocidade1"))
const carro2 = prompt("Informe carro2")
const velocidade2 = Number(prompt("Informe velocidade2:"))

if(velocidade1 > velocidade2){
    alert(`${carro1} é mais rapido. Velocidade ${velocidade1} km/h`)
}else if(velocidade1 < velocidade2) {
    alert(`${carro2} é mais rapido. Velocidade ${velocidade2} km/h`)
}else{
    alert(`Velocidade iguais ${velocidade1} km/h`)
}

