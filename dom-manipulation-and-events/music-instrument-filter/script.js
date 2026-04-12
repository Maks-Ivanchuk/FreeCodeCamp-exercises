const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 },
];

const selectContainer = document.querySelector("select");
const productsContainer = document.querySelector(".products-container");
function instrumentCards(instrumentCategory) {
  const instruments =
    instrumentCategory === "all"
      ? instrumentsArr
      : instrumentsArr.filter(
          ({ category }) => category === instrumentCategory,
        );

  return instruments.map(({ instrument, price }) => {
    return `
          <div class="card">
            <h2>${instrument}</h2>
            <p>$${price}</p>
          </div>
        `;
  });
}
selectContainer.addEventListener("change", () => {
  productsContainer.innerHTML = instrumentCards(selectContainer.value).join(""); // .join("") видаляє коми між елементами масиву, які повертає map
});

const footballTeam = {
  team: "FC Barcelona",
  year: 1899,
  headCoach: "Xavi Hernandez",
  players: [
    { name: "Robert Lewandowski", position: "forward", isCaptain: false },
    { name: "Pedri", position: "midfielder", isCaptain: false },
    { name: "Ronald Araujo", position: "defender", isCaptain: false },
    { name: "Marc-Andre ter Stegen", position: "goalkeeper", isCaptain: true },
  ],
};

const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");

team.textContent = footballTeam.team;
year.textContent = footballTeam.year;
headCoach.textContent = footballTeam.headCoach;

function playerCard(playerCategory) {
  if (playerCategory === "all") {
    footballTeam.players.forEach((player) => {
      playerCards.innerHTML += `
        <div class="player-card">
            <h2>${player.name}</h2>
            <p>Position: ${player.position}</p>
          </div>
      `;
    });
  } else {
    const players = footballTeam.players.filter(
      ({ position }) => position === playerCategory,
    );
    console.log(players);

    players.map(({ name, position }) => {
      playerCards.innerHTML += `
        <div class="player-card">
            <h2>${name}</h2>
            <p>Position: ${position}</p>
          </div>
      `;
    });
  }
}
playerCard("forward");
