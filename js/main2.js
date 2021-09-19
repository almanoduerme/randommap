// DOM
const containerImage = document.querySelector(".container__image");
const boton = document.querySelector("#boton");

// ARRAY CON MAPAS
const mapas = [
  "images/ascent.jpg",
  "images/bind.jpg",
  "images/breeze.jpg",
  "images/fracture.jpg",
  "images/haven.jpg",
  "images/icebox.jpg",
  "images/split.jpg",
];

// VARIABLES
let valor = Math.random() * 7;
let valorParseado = parseInt(valor);

// Div con las imágenes de los mapas
const mapaSorteado = document.createElement("img");
mapaSorteado.classList.add("mapaSorteado");
mapaSorteado.src = mapas[valorParseado];

boton.addEventListener("click", () => {
  containerImage.appendChild(mapaSorteado); //NO BORRAR
});
