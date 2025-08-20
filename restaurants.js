const restaurants = [
  {
    name: "Frantzén",
    rating: 4.9,
    price: "$$$$",
    image: "https://images.unsplash.com/photo-1555992336-cbf1c7c1d1d3",
    link: "https://goo.gl/maps/abc123",
  },
  {
    name: "Oaxen Krog",
    rating: 4.8,
    price: "$$$",
    image: "https://images.unsplash.com/photo-1543353071-873f17a7a088",
    link: "https://goo.gl/maps/def456",
  },
  {
    name: "Gastrologik",
    rating: 4.7,
    price: "$$$",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    link: "https://goo.gl/maps/ghi789",
  },
  {
    name: "Pelikan",
    rating: 4.6,
    price: "$$",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    link: "https://goo.gl/maps/jkl012",
  },
];

let sortKey = "rating";

function renderList() {
  const list = document.getElementById("restaurant-list");
  list.innerHTML = "";

  const sorted = [...restaurants].sort((a, b) => {
    if (sortKey === "rating") return b.rating - a.rating;
    if (sortKey === "price") return a.price.length - b.price.length;
    return 0;
  });

  sorted.forEach((res) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${res.image}" alt="${res.name}">
      <div class="card-content">
        <h2>${res.name}</h2>
        <p>Betyg: ⭐ ${res.rating}</p>
        <p>Prisnivå: ${res.price}</p>
        <a href="${res.link}" target="_blank">Visa på Google Maps</a>
      </div>
    `;

    list.appendChild(card);
  });
}

function sortBy(key) {
  sortKey = key;
  renderList();
}

// Render första gången
renderList();