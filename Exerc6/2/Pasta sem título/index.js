let palavra = prompt("Informe uma palavra:")

palavra = palavra.toLowerCase()

let palavraInvertida = ''



for (let i = (palavra.length - 1); i >= 0; i--) {
    palavraInvertida += palavra[i]
    
}

if(palavra === palavraInvertida){
    alert(`A pavavra: ${palavra} é um palindromo!`)
}else{
    alert(`A pavavra: ${palavra} não é um palindromo! \n\n ${palavra} != ${palavraInvertida}`)
}