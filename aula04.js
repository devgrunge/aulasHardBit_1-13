const receberAfuncao = function somar(a , b){
    return a + b
}

console.log(receberAfuncao(1 , 2));


/* Uma forma mais rápida de fazer uma função é como a da forma abaixo
são as arrow functions , que se encontram em tal estrutura: 
*/
const receberAfuncao2 = a => {return a}

console.log(receberAfuncao2(1))