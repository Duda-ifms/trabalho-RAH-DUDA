const cards = [
  {
    image: "image/WhatsApp Image 2025-09-16 at 17.16.27.jpeg",
    title: "Homem Aranha e Winx ",
    description: "Conhecendo o universo das nossas fadinhas",
    
  },
  {
    image: "image/WhatsApp Image 2025-09-16 at 18.07.50.jpeg",
    title: "Homem Aranha e Winx",
    description: "Salvando o mundo",
    
  },
  {
    image: "image/Homem-Aranha e as Fadas Mágicas(1).png",
    title: "Homem Aranha e Winx",
    description: "O mundo divertido com as Winx",
  },
  {
    image: "image/Resgate no Céu Claro.png",
    title: "Homem Aranha e Winx",
    description: "O Homem Aranha desmaiou",
  },
  {
    image: "image/homem.jpg",
    title: "Homem Aranha e Winx",
    description: "Voando com as Winx",
  },
   {
    image: "image/WhatsApp Image 2025-09-23 at 17.42.19.jpeg",
    title: "Homem Aranha e Winx ",
    description: "Sinta o poder da aranha",
  },
  {
    image: "image/WhatsApp Image 2025-09-23 at 17.42.30.jpeg",
    title: "Homem Aranha ",
    description: "Aranha com asas",
  },
  {
    image: "image/WhatsApp Image 2025-09-23 at 18.19.47.jpeg",
    title: "Homem Aranha ",
    description: "Salvando a dimensão mágica?",
  },
   {
    image: "image/WhatsApp Image 2025-09-24 at 22.03.12.jpeg",
    title: "Homem Aranha e as Winx",
    description: "Salvando a dimensão mágica",
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

   AOS.init({
    duration: 1000, // duração da animação em ms
    easing: 'ease-in-out', // tipo de animação
    once: true, // anima uma vez apenas
  });
});

