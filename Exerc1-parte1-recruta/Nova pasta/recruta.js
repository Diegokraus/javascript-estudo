const firstName = prompt('Informe o Nome:')
const lastName = prompt('Informe o Sobrenome:')
const studyArea = prompt('Informe o Campo de Estudo:')
const yearOfBirth = prompt('Informe o ano de nascimento:')

const age = 2023 - yearOfBirth
alert(firstName+' '+lastName+' '+studyArea+' '+age)