const cards = [
  {
    image: "image/WhatsApp Image 2025-09-16 at 17.16.27.jpeg",
    title: "Homem Aranha ",
    description: "Salvando o mundo junto com as Winx",
    
  },
  {
    image: "image/WhatsApp Image 2025-09-16 at 18.07.50.jpeg",
    title: "Homem Aranha e winx",
    description: "Salvando o mundo",
    
  },
  {
    image: "image/Homem-Aranha e as Fadas Mágicas(1).png",
    title: "Homem Aranha",
    description: "será que é aranha?",
  },
  {
    image: "image/Resgate no Céu Claro.png",
    title: "homem aranha e winx",
    description: "as Winx carregando o homem aranha por que ele desmaiou",
  },
  {
    image: "image/homem.jpg",
    title: "homem aranha e winx",
    description: "as Winx carregando o homem aranha por que ele desmaiou",
  },
];

const cardList = document.getElementById("card-list");

cards.forEach(card => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  cardDiv.innerHTML = `
    <img src="${card.image}" alt="${card.title}">
    <h2>${card.title}</h2>
    <p>${card.description}</p>
  `;

  cardList.appendChild(cardDiv);
});

