// DOM
const containerImage = document.querySelector(".container__image");
const boton = document.querySelector("#boton");
let isWorking = false;

const mapsName = [
  "Ascent",
  "Bind",
  "Breeze",
  "Fracture",
  "Haven",
  "Icebox",
  "Split",
];
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

const HandlerRandomMap = () => {
  // VARIABLES
  let valor = Math.random() * 7;
  let valorParseado = parseInt(valor);

  // Div con las imágenes de los mapas
  const mapaSorteado = document.createElement("img");

  const textoMapaSorteado = document.createElement("p");
  textoMapaSorteado.classList.add("texto");
  textoMapaSorteado.textContent = mapsName[valorParseado];

  mapaSorteado.classList.add("mapaSorteado");
  mapaSorteado.src = mapas[valorParseado];
  containerImage.innerHTML = "";
  containerImage.appendChild(mapaSorteado);
  containerImage.appendChild(textoMapaSorteado);
};

const HandlerGenerateMap = () => {
  if (!isWorking) {
    isWorking = true;
    const intervaloUno = setInterval(() => {
      HandlerRandomMap();
    }, 150);
    setTimeout(() => {
      clearInterval(intervaloUno);
      isWorking = false;
    }, 1000 * 2);
  }
};

boton.addEventListener("click", HandlerGenerateMap);
