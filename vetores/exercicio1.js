/* 71. Crie um programa que leia um vetor de números inteiros e exiba a soma de todos os elementos */
var readline = require('readline-sync')

const quantity = Number(parseInt(readline.question("Digite quantos elementos o seu vetor tera: ")))

let array = []

for(let i = 0; i < quantity; i++){
    const number = Number(readline.questionInt(`Digite o elemento ${i + 1}:`))
    array.push(number)
}

let sum = 0
for(let e of array){
    sum += e
}

console.log(`A soma de todos os elementos é: ${sum}`)