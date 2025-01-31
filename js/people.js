// 1. Importa la tua funzione da names.js
// 2. Importa la tua funzione da hobbies.js
// 3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All’interno della tua funzione, usa le tue due funzioni precedenti per costruire l’oggetto.




// importo la funzione fullName
const fullName = require ("./names.js");



// importo la funzione hobbies
const hobbies = require("./hobbies.js");




// creo una funzione senza paramentri
function personIdentity(){
    
    // salvo in una costante la precedente funzione che restituisce un oggetto   
    // fullName("ylenia","mighela") quindi l'oggetto sarebbe composto in questo modo firstName:ylenia e lastName:mighela
    const person = fullName("ylenia","mighela");
    
    // salvo in una costante la precedente funzione che restituisce un array   
    //hobbies("nuoto","danza","basket") quindi l'array sarebbe composta in questo modo 
    // ["nuoto","danza","basket"]
    const passions = hobbies("nuoto","danza","basket");
    


    return {
        // utilizzo il template literal per concatenare i valori
        fullName: `${person.firstName} ${person.lastName}`,
        hobbies: passions
    };
    
};
console.log(personIdentity());
