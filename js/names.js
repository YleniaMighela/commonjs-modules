// 1 - names.js
// 1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// 2. Esporta la funzione dal file.



// creo una funzione in cui mi restituirà un oggetto con due proprietà
function fullName(firstName, lastName){

    return {

        firstName : firstName,
        lastName : lastName
    };


};

// console.log(fullName("ylenia","mighela"));




// ESPORTO LA FUNZIONE
module.exports = fullName;