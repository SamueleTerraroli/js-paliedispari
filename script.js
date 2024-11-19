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
console.log(arr);

let palArr = reverseArr(arr);
console.log(palArr);




function getArray(parola){
    let arr = parola.split("");
    return arr;
    
}

function reverseArr (arrResult){
    let palArr = [];
    for (let i = arrResult.length; i > 0; i--) {
      palArr += arrResult.at(i);
      
        
        
    }
    return palArr;   

}

