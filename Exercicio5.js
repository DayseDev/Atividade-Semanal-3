//Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.


let AnoNascimento = 2012
let AnoAtual = 2022

let idade = AnoAtual - AnoNascimento

if (idade >= 18){
    console.log('Você é maior de idade.')
}else {
    console.log('Você é menor de idade.')
}
