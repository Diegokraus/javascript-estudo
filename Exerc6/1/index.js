let numero = parseInt(prompt('Informe o numero a ser calculado:'))
let resultado = ''

for(let i=1; i <= 20; i++){
  resultado += numero + ' X ' + i + ' = ' + (numero * i) + '\n'
}

alert('Resultado ' + numero + ':\n\n' + resultado)








