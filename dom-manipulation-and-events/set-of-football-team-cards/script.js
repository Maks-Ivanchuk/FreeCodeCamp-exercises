const footballTeam = {
  team: "FC Barcelona",
  year: 1899,
  headCoach: "Xavi Hernandez",
  players: [
    { name: "Robert Lewandowski", position: "forward", isCaptain: false },
    { name: "Pedri", position: "midfielder", isCaptain: false },
    { name: "Ronald Araujo", position: "defender", isCaptain: true },
    { name: "Marc-Andre ter Stegen", position: "goalkeeper", isCaptain: false },
  ],
};

const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");

team.textContent = footballTeam.team;
year.textContent = footballTeam.year;
headCoach.textContent = footballTeam.headCoach;

function getPlayerCards(playerCategory) {
  const playersArr =
    playerCategory === "all"
      ? footballTeam.players
      : footballTeam.players.filter(
          ({ position }) => position === playerCategory,
        );

  return playersArr.map(({ name, position, isCaptain }) => {
    return `
      <div class="player-card">
        <h2>${isCaptain ? "(Captain) " : ""}${name}</h2>
        <p>Position: ${position}</p>
      </div>
      `;
  });
}

const players = document.getElementById("players");

players.addEventListener("change", (e) => {
  playerCards.innerHTML = getPlayerCards(e.target.value).join("");
});
