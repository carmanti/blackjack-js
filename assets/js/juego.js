/**
 * 2C = Two of Clubs (treboles)
 * 2D = Two of diaminds (diamantes)
 * 2H = Two of hearts (corazones)
 * 2S = Two of spades (espadas)
 */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

//Funcion  de crear baraja
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }
  //   console.log(deck);
  deck = _.shuffle(deck);
  console.log(deck);
};

crearDeck();

// Funcion de pedir una carta
const pedirCarta = () => {
  if (deck.length === 0) {
    throw "NO hay cartas";
  }
  const carta = deck.pop();
  console.log(carta);
  return carta;
};

// pedirCarta();

//Saber el valor de la carta
//Codigo corto
const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
//Codigo largo
// const valorCarta = (carta) => {
//   const valor = carta.substring(0, carta.length - 1);
//   let puntos = 0;
//2 = 2
//10 = 10
//   if (isNaN(valor)) {
// true
//     puntos = valor === "A" ? 11 : 10;
//   } else {
//     console.log("Es un numero");
//     puntos = valor * 1; // convierte a numero cuando en consola es gris significa que es string
//   }
//   console.log(puntos);
// };
const valor = valorCarta(pedirCarta());
// valorCarta("AD");
console.log({ valor });
