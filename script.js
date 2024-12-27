const container = document.querySelector(".container");

async function digimon() {
  const request = await fetch("https://digimon-api.vercel.app/api/digimon");
  const response = await request.json();

  response.forEach(element => {
    createElementScreen(element.name, element.img);
  });
};

function createElementScreen(name, image) {
  const h1 = document.createElement("h1");
  const imageDigimon = document.createElement("img");
  const card = document.createElement("div");

  card.className = "card"
  h1.innerText = name;
  imageDigimon.src = image;

  container.appendChild(card);
  card.appendChild(h1);
  card.appendChild(imageDigimon);

};

digimon()

