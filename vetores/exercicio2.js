/* 7.2 Faça um programa que leia um vetor de números inteiros e exiba o maior elemento presente no vetor */
var readline = require('readline-sync')  

const quantity = Number(parseInt(readline.question('Digite a quantidade de elementos: ')))

let array = []

for(let i = 0; i<quantity; i++){
    let number = Number(readline.questionInt(`Digite o valor do elemento ${i + 1}: `))
    array.push(number)
}

let maior = array[0]
for(let i = 1; i<array.length; i++){
    if (maior<array[i]){
        maior = array[i]
    }
}

console.log(`O maior numero desse array eh: ${maior}`)