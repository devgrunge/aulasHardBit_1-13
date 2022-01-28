const criptos = [ {nome:'ethereum', valor:6},
                  {nome:'dogCoin', valor:100},
                  {nome:'bitCoin', valor:4}
                ]

const res = criptos.reduce((prevEl , el) => {
    return prevEl + el.valor
}, 0)                
console.log(res)

/*let variavelDentroDaOutra = criptos.reduce((xoxota,pinto ) =>{return xoxota + pinto.valor },0) 
console.log(variavelDentroDaOutra)*/
