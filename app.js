const sum = (a, b) => {
    return a + b
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function (valueInDollar) {
    let valueInEuro = valueInDollar / 1.07
    return Math.trunc(valueInEuro * 156.5)
}
const fromYenToPound = function (valueInYen) {
    let valueInEuro = valueInYen / 156.5
    return Math.trunc(valueInEuro * 0.87)
}
console.log(sum(5, 5))
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}