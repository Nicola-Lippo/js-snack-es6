'use strict';
console.log('ci sono snack 2')

//Creare un array di oggetti di squadre di calcio.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const squadre = [
    {
        name: 'milan',
        points: 0,
        fouls:  0
    }, 
    {
        name: 'juve',
        points: 0,
        fouls:  0
    }, 
    {
        name: 'roma',
        points: 0,
        fouls:  0
    }, 
    {
        name: 'sassuolo',
        points: 0,
        fouls:  0
    },
    {
        name: 'atalanta',
        points: 0,
        fouls:  0
    },
]
console.log(squadre);
//Generare numeri random al posto degli 0 nelle proprietà Punti fatti e falli subiti.
 function generaCasuali(num) {
    Math.floor(Math.random() * num);
 }




