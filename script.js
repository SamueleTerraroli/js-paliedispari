//Palindroma
/*
-creare un prompt per inserire la parola
-creare una funzione che scompone la parola in un array
-creare un ciclo for con ordini di ciclo inversi
-mettere a confronto i 2 array generati 
-se gli array corrispondono generare un messaggio: la parola è palindroma, viceversa se la parola non è palindroma
*/


let word = prompt('inserisci una parola');

let arr = getArray(word);
//console.log(arr);


let message = reverseArr(arr);
console.log(message);


function getArray(parola){
    let arr = parola.split("");
    return arr;
    
}

function reverseArr (arrResult){
    newArr = [];
    let message=""
    for (let i = arrResult.length -1; i >= 0; i--) {
        newArr.push(arrResult[i]);
        newArr.join();
        
        if (arrResult[i] === newArr[i]) {
            message = `La parola ${word} è palindroma`;
            
        } else{
            message = `La parola ${word} NON è palindroma`;
        }    
    }
    return message;
}

/*function wordUpperCase (parolaMaiuscola){
    const arrUpper = parolaMaiuscola.substr.toUpperCase();

    return arrUpper;
}
*/