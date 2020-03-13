/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3
  
  http://www.imparareaprogrammare.it
*/
var n=new Array();
n[0]=3;
n[1]=5;
n[2]=7;
n[3]=18;
n[4]=21;

var sum = n.reduce((accumulator, currentValue) => accumulator+currentValue); 
console.log('Gli elementi dell\'array sono: '+n);
console.log('La somma degli elementi dell\'array è '+sum);
var tot=n.length;
console.log('La media degli elementi dell\'array è '+sum/tot);
