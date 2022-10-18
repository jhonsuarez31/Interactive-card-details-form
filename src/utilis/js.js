const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]
  /*Reto #1*/

const NameOvejas = ovejas.filter(nuevasOvejas=>{   
    if((nuevasOvejas.name.includes('A') || nuevasOvejas.name.includes('a'))
    && (nuevasOvejas.name.includes('N') || nuevasOvejas.name.includes('n'))){       
        return nuevasOvejas   
    }
})
const ovejasRojas = NameOvejas.filter(ovejascolor =>
   ovejascolor.color==='rojo' );

console.log(ovejasRojas)

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 2000);
})

promesa.then(()=>{
    console.log('Then de la promesa')
})
