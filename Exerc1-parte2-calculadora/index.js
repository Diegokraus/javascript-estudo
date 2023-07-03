const entrada1 = prompt('Informe o 1o numero: ')
const entrada2 = prompt('Informe o 2o numero: ')

const numero1 = parseFloat(entrada1)
const numero2 = parseFloat(entrada2)

const soma = numero1 + numero2;
const subtracao = numero1 - numero2;
const multiplicacao = numero1 * numero2;
const divisao = numero1 / numero2;



alert('Resultado:\n\n'+'Soma: ' +soma+ '\n'+ 'Subtração: ' +subtracao+ '\n'+'multiplicação: ' +multiplicacao+ '\n'+'Divisão: '+divisao)