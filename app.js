// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return Number(valueInDollar.toFixed(2));
}


const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9 / 1.2;
    return Number(valueInYen.toFixed(2));
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.8 / 127.9;
    return Number(valueInPound.toFixed(2));
}

const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3));
console.log(fromEuroToDollar(3.5));
console.log(fromDollarToYen(100));
console.log(fromYenToPound(50));


// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };