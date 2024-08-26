/* Escreva um programa que leia um vetor de números inteiros e exiba a média dos elementos */
var readline = require("readline-sync")

const quantity = Number(parseInt(readline.question("Digite quantos elementos tera o seu array: ")))

let array = []

for(let i = 0; i<quantity; i++){
    let elements = Number(readline.questionInt(`Digite o ${i + 1} elemento: `))
    array.push(elements)
}

let sum = 0
for(let e of array){
    sum += e
}

media = sum/array.length

console.log(`A media dos numeros sera ${media}`)
