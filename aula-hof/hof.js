function calcular(a, b, operacao){
    console.log('realizando uma operacao')
    const resultado = operacao(a,b)
    return resultado
}

function somar(x,y){
    console.log('realizando uma soma')
    return x + y
}

console.log(calcular(3,5,somar))

console.log(calcular(8,4,function(x,y){
    console.log('realizando uma subtraçao')
    return x - y
}))