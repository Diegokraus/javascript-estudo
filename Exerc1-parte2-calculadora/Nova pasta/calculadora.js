const input1 = prompt('Informe o 1 numero:')
const input2 = prompt('Informe o 2 numero:')

const number1 = parseFloat(input1)
const number2 = parseFloat(input2)

const addition = number1 + number2
const subtraction = number1 - number2
const multiplication = number1 * number2
const division = number1 / number2


alert(
  'Resultado:\n'+
  '\nSoma = '+addition+
  '\nSubtração = '+subtraction+
  '\nMultiplicação = '+multiplication+
  '\nDivisão = '+division
)
