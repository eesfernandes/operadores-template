/*
// Exercicio para Fixar
let idade = parseInt(prompt('Qual a sua idade? '));
let idadeMelhorAmig = parseInt(prompt('Qual a idade do seu melhor amigo (a)? '));
if(idade > idadeMelhorAmig){
    console.log(`Sua idade é maior que a do seu melhor amigo? SIM`);
}else{
    console.log(`Sua idade é maior que a do seu melhor amigo? NÂO`);
}
if(idade > idadeMelhorAmig){
    let diferenca = idade - idadeMelhorAmig
    console.log(`Diferença da SUA idade para o do seu melhor amigo(a): ${diferenca} anos.`)
}else if(idadeMelhorAmig > idade){
    diferenca = idadeMelhorAmig - idade
    console.log(`Diferença da idade do seu MELHOR AMIGO(A) para a sua: ${diferenca} anos`)
}else{
    console.log(`As idades são iguais - Sua idade ${idade} anos - Idade do seu melhor amigo(a) ${idadeMelhorAmig} anos.`)
}
*/

// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

const comparacao1 = !b && d
const comparacao2 = b && a && !d
const comparacao3 = a || d
const comparacao4 = c && !d

console.log(`1 - ${comparacao1} | 2 - ${comparacao2} | 3 - ${comparacao3} | 4 - ${comparacao4}`)