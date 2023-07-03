let medida = parseFloat(prompt("Informe um valor em metros"))
const unidadeMedida = prompt("Informe a unidade de medida: (mm) (cm) (dm) (dam) (hm) (km)")

const metros = medida

switch (unidadeMedida) {
    case 'mm':
        medida *= 1000
        break;
    case 'cm':
        medida *= 100
        break;
    case 'dm':
        medida *= 10
        break;
    case 'dam':
        medida /= 10
        break;
    case 'hm':
        medida /= 100
        break;
    case 'km':
        medida /= 1000        
        break;

    default:
        alert('Opçao Invalida!')
}



alert(`${metros} metros = ${medida} ${unidadeMedida}`)

