let str = prompt('Informe uma palavra:')

str = str.toLowerCase()

let newString = "";
for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
}

if(str === newString) {
  alert('Palindroma: ' + str)
}else {
  alert('Não é palindroma:\n' + str + '\n' + newString)
}



