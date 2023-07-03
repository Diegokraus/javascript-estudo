function calcularMedia(a,b){
  const media = (a+b)/2
  return media
}

const resultado = calcularMedia(7, 2)

console.log(resultado)

function criarProduto(nome,preco){
  const produto = {
    nome,
    preco,
    estoque:1
  }
  return produto
}

notebook = criarProduto('notebook intel core i3 8gb',2500)

console.log(notebook)


function areaRetangular(base,altura){
  return base * altura

}

function areaQuadrada(lado){
  return areaRetangular(lado, lado)
}

// console.log(areaQuadrada(9))

function maioridade(idade){
  if(idade >= 18){
    return 'marior de idade'
  }else{
    return 'menor de idade'
  }
}

console.log(maioridade(29))
console.log(maioridade(13))