const numero = prompt("Informe um numero para a tabuada:")
let resultado = ''


for (let i = 1; i <= 20; i++) {
    resultado += numero + 'X' + i + '=' + (numero * i) + '\n'
    
}

alert(resultado)