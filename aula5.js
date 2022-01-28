/*
let a = 10
let b = 20
if(a >= 10){
   console.log('true')
}else{
   console.log('false')
   if(a > 10 || a < b && a === b){
       console.log('true')
    }else{
        console.log('false')
    }
}*/

const resultado = (numero) => {
    if(numero % 2 === 0){
        return 'O número é par'
    }else{
        return 'O número é impar'
    }
}
    console.log(resultado(5))