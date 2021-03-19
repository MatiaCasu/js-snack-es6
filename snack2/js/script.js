/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

const squadre = [
  {
    nome : "roma",
    punti : 0,
    falliSubiti : 0
  },
  {
    nome : "milan",
    punti : 0,
    falliSubiti : 0
  },
  {
    nome : "juve",
    punti : 0,
    falliSubiti : 0
  },
  {
    nome : "inter",
    punti : 0,
    falliSubiti : 0
  },
];

function nRandom(){
  return Math.floor(Math.random() * 100) + 1;
}

const squadreNuova = [];
for (let i = 0; i < squadre.length; i++) {
  var {punti, falliSubiti} = squadre[i];

  punti = nRandom();
  falliSubiti = nRandom();
  squadreNuova.push(
    {
      punti,
      falliSubiti,
    }
  );
}

console.log(squadre);

console.log(squadreNuova);
