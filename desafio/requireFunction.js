let myFunc = require('./exportsFunction')
let name = myFunc('--name')
let greeting = myFunc('--greeting')

console.log(`Olá, ${name}, ${greeting} Espero que você se divirta bastante aqui! XD`)