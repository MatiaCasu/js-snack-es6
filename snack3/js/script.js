/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. */

arrayProva = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
n1 = 2;
n2 = 8;

function inBetweenElement(array, a, b){
  var nArray = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] >= a && array[i] <= b){
      nArray.push(array[i]);
    }
  }
  console.log(nArray);
  return nArray;
}

inBetweenElement(arrayProva, n1, n2);
