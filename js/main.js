// DOM
const imageContainer = document.querySelector(".IMGContainer");
const winnerMapContainer = document.querySelector(".winnerMapContainer");
const button = document.querySelector("#button");
let isWorking = false;

// Maps
const mapsName = [ "Ascent", "Bind", "Breeze", "Fracture", "Haven", "Icebox", "Split", "Pearl", "Lotus" ];

// Maps Images
const maps = [ "images/ascent.jpg", "images/bind.jpg", "images/breeze.jpg", "images/fracture.jpg", "images/haven.jpg", "images/icebox.jpg", "images/split.jpg", "images/pearl.jpg", "images/lotus.jpg" ];

const handlerRandomMap = () => {
  // VARIABLES
  let value = Math.random() * mapsName.length;
  let parseValue = parseInt(value);

  // Create Elements DOM
  const winningMap = document.createElement('img');
  winningMap.src = maps[parseValue];
  imageContainer.innerHTML = '';
  imageContainer.appendChild(winningMap);

  const winnerMapText = document.createElement('p');
  winnerMapText.classList.add('text');
  winnerMapText.textContent = mapsName[parseValue];

  winnerMapContainer.innerHTML = '';
  winnerMapContainer.appendChild(winnerMapText);
};

const handlerMapGenerator = () => {
  if (!isWorking) {
    isWorking = true;
    const interval = setInterval(() => {
      handlerRandomMap();
    }, 150);
    setTimeout(() => {
      clearInterval(interval);
      isWorking = false;
    }, 1000 * 3);
  }
};

button.addEventListener("click", handlerMapGenerator);
