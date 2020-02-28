/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/


var seconds = 12560;
const value1 = 3600;
const value2 = 60;
hour = Math.floor(seconds/value1);
min = Math.floor((seconds%value1)/value2);
sec = (seconds%value1)-(min*value2);
console.log(seconds + ' secondi corrispondono a ' + hour + ' ore, ' + min + ' minuti e ' + sec + ' secondi.');
