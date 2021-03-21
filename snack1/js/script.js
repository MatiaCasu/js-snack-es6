/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */
const bici = [
  {
    nome : "Graziella",
    peso : 6000,
  },
  {
    nome : "Grazia",
    peso : 1000,
  },
  {
    nome : "Pluto",
    peso : 2000,
  }
];
// bici con peso minore
var biciLeggera = bici[0];

for(let i = 0; i < bici.length; i++) {
  let {peso} = bici[i];
  if(peso < biciLeggera.peso){
    biciLeggera = bici[i];
  }
}
console.log(biciLeggera);
