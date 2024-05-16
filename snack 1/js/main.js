'use strict';
console.log('ci sono')
//Creare un array di oggetti con le proprietà: nome e peso
const myBiciArray = [
    {
        nome: 'super bici',
        peso: 8
    },
    {
        nome: 'ruote chiodate',
        peso: 15
    },
    {
        nome: 'leggerissima',
        peso: 4
    },
    {
        nome: 'macigno',
        peso: 20
    },
]
//Stampare a schermo la bici con peso minore utilizzando template literal
let biciLeggera = myBiciArray[0].peso;
let nomeLeggera;

for (let i = 0; i < myBiciArray.length; i++) {
    if (myBiciArray[i].peso < biciLeggera) {
        biciLeggera = myBiciArray[i].peso;
        nomeLeggera = myBiciArray[i].nome;       
    }        
}

console.log(`la bici si chiama ${nomeLeggera} e pesa ${biciLeggera}`)



