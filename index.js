const cards = [
  {
    image: "image/WhatsApp Image 2025-09-16 at 17.16.27.jpeg",
    title: "Homem Aranha e Winx ",
    description: "Salvando o mundo junto com as Winx",
    
  },
  {
    image: "image/WhatsApp Image 2025-09-16 at 18.07.50.jpeg",
    title: "Homem Aranha e Winx",
    description: "Salvando o mundo",
    
  },
  {
    image: "image/Homem-Aranha e as Fadas Mágicas(1).png",
    title: "Homem Aranha e Winx",
    description: "será que é aranha?",
  },
  {
    image: "image/Resgate no Céu Claro.png",
    title: "Homem Aranha e Winx",
    description: "as Winx carregando o homem aranha por que ele desmaiou",
  },
  {
    image: "image/homem.jpg",
    title: "Homem Aranha e Winx",
    description: "as Winx carregando o homem aranha por que ele desmaiou",
  },
   {
    image: "image/WhatsApp Image 2025-09-23 at 17.42.19.jpeg",
    title: "Homem Aranha e Winx ",
    description: "Não amiga, você não está manchada",
  },
  {
    image: "image/WhatsApp Image 2025-09-23 at 17.42.30.jpeg",
    title: "Homem Aranha ",
    description: "Mais uma vez salvando o mundo",
  },
  {
    image: "image/WhatsApp Image 2025-09-23 at 18.19.47.jpeg",
    title: "Homem Aranha ",
    description: "Winx, por que choras?",
  },
   {
    image: "",
    title: "Homem Aranha ",
    description: "Winx, por que choras?",
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

