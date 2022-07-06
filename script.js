
function setup() {

  document.getElementById




  const episodes = getAllEpisodes();
  makePageForEpisodes(episodes);
}

function makePageForEpisodes(episodeList) {
  const container = document.getElementById("episodes");

  //Nav -- Title and Search bar


//-------------------------------------
// Cards
  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards-container");
  container.appendChild(cardsContainer);
// One card 
  episodeList.forEach((episode) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const h2 = document.createElement("h2");
    h2.textContent = `${episode.name}`;

    const img = document.createElement("img");
    img.setAttribute("src", episode.image.medium);

    const p = document.createElement("p");
    p.textContent = episode.summary;

    cardsContainer.appendChild(card);
    card.appendChild(h2);
    card.appendChild(img);
    card.appendChild(p);
  //-------------------------------------
  });
}



window.onload = setup;
