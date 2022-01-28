let obj = {nome: 'alan' , nota:10 , id:0}
let {nome , nota , id} =  obj

//console.log(id)

let newArray = ["alan" , "pedro" , "paulo"]

let [primeiroNome , segundoNome] = newArray

//console.log(primeiroNome)

let arrayNovo = [ 0,  1, 2, 3, 4,  5, 6]

let [first  , second , ...others ] = arrayNovo

console.log(others.length)