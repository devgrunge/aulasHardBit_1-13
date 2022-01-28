/* 
var meuCarro = new Object();
meuCarro.fabricacao = 'ford'
meuCarro.modelo = 'mustang'
meuCarro.ano = 1970
console.log(meuCarro)
Uma outra forma de demonstrar: meuCarro['KmRodados'] = 1000 
*/

const perfil = {
    nome:'alan',
    urlAvatar: 'http://www.teste.com.br/avatar.png',
    likes:10,
    endereco:{
        rua: 'rua nova',
        numeroCasa: 200,
        contatos:{
            telefone01: 123456789,
            telefone02: 147784378,
            telefone03: 324839087
        }
    }
}

//console.log(perfil.endereco.contatos.telefone01)
// Abaixo está uma função construtora , o que diferencia é o primeiro caracter que sempre será maiúsculo!
function Carro(marca , modelo , ano){
         this.marca = marca;
         this.modelo = modelo;
         this.ano = ano;
}

var novoCarro = new Carro('chevrolet' , 'chevete' , 1990)

console.log(novoCarro)


