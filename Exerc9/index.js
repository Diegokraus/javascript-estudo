function triangulo(){
  const base = parseFloat(prompt('Informe a base do triangulo: '))
  const altura = parseFloat(prompt('Informe a altura do triangulo: '))
  return base * altura / 2
}

function retangulo(){
  const base = parseFloat(prompt('Informe a base do retangulo: '))
  const altura = parseFloat(prompt('Informe a altura do retangulo: '))
  return base * altura
}

function quadrado(){
  const lado = parseFloat(prompt('Informe o lado do quadrado: '))
  return lado * lado
}

function trapezio(){
  const baseMaior = parseFloat(prompt('Informe a base maior do trapezio: '))
  const baseMenor = parseFloat(prompt('Informe a base menor do trapezio: '))
  const altura = parseFloat(prompt('Informe a altura do trapezio: '))
  return (baseMaior + baseMenor) * altura / 2
}

function circulo(){
  const raio = parseFloat(prompt('Informe o raio do circulo: '))
  return Math.PI * raio * raio
}

function exibirMenu(){
  return prompt(
    'Calculadora Geométrica:\n' + 
    '\nMENU DE OPÇÕES: \n1-Área do triangulo \n2-Área do retangulo \n3-Área do quadrado \n4-Área do trapézio \n5-Área do círculo \n6-Sair ')
}

function executar(){
  let opcao = ''

  do{
    opcao = exibirMenu()
    let resultado

    switch(opcao){
      case '1':
        resultado = triangulo()
        break
      case '2':
        resultado = retangulo()
        break
      case '3':
        resultado = quadrado()
        break
      case '4':
        resultado = trapezio()
        break
      case '5':
        resultado = circulo()
        break
      case '6':
        alert('Saindo...')
        break
      default:
        alert('Opção inválida...')
    }
    if(resultado){
      alert('Resultado: ' + resultado)
    }
  } while(opcao !== '6')
} 

executar()



