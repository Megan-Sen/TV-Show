function setup() {
  const episodes = getAllEpisodes();
  makePageForEpisodes(episodes);
}

function makePageForEpisodes(episodeList) {
  const container = document.getElementById("episodes");

  //Nav -- Title and Search bar
  const navConrainer = document.createElement("div");
  navConrainer.classList.add("nav-container");

  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = 'TV SHOW';

  container.appendChild(navConrainer);
  navConrainer.appendChild(title);

//-------------------------------------
// Cards
  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards-container");
  container.appendChild(cardsContainer);
// One card 
  episodeList.forEach((episode) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const h1 = document.createElement("h1");
    h1.textContent = `${episode.name}`;

    const img = document.createElement("img");
    img.setAttribute("src", episode.image.medium);

    const p = document.createElement("p");
    p.textContent = episode.summary;

    cardsContainer.appendChild(card);
    card.appendChild(h1);
    card.appendChild(img);
    card.appendChild(p);
  //-------------------------------------
  });
}



window.onload = setup;
