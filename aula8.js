const usuarios = [ {id:1 , nome:'alan' , pagamento:true},
                   {id:2 , nome:'pedro' , pagamento:true},
                   {id:3 , nome:'paulo' , pagamento:false},
                   {id:4 , nome:'andre' , pagamento:false}
                ]

const res = usuarios.filter((el)=>{
    return el.pagamento !== true;
})                

console.log(res);