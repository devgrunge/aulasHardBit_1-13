const numeros = [1, 2, 3, 4, 5, 6 , 7]
console.log(numeros.length);

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0 ){
        console.log(`${numeros[i]}  Esse número é par!`)
    }else{
        console.log(`${numeros[i]}  Esse número  ímpar!`)

    }
}
