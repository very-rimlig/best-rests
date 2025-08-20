const restaurants = [
  {
    name: "Frantzén",
    rating: 4.9,
    price: "$$$$",
    image: "https://images.unsplash.com/photo-1555992336-cbf1c7c1d1d3",
    link: "https://maps.app.goo.gl/227Hev8QpjnmN4FG7",
  },
  {
    name: "Oaxen Krog",
    rating: 4.8,
    price: "$$$",
    image: "https://images.unsplash.com/photo-1543353071-873f17a7a088",
    link: "https://maps.app.goo.gl/qbyrJT9vufwQAXFy5",
  },
  {
    name: "Gastrologik",
    rating: 4.7,
    price: "$$$",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    link: "https://maps.app.goo.gl/c4VZ6UcdxBNPpaWQA",
  },
  {
    name: "Pelikan",
    rating: 4.6,
    price: "$$",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    link: "https://maps.app.goo.gl/dPSvoWVrwjYKL4mv8",
  },
  {
    name: "Ekstedt",
    rating: 4.6,
    price: "$$$",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    link: "https://maps.app.goo.gl/zJF1hSveaCamkWUn6",
  },
  {
    name: "Smorgastarteriet",
    rating: 4.5,
    price: "$$$",
    image: "https://images.unsplash.com/photo-1546069901-eacef0df6022",
    link: "https://maps.app.goo.gl/hayBSS2aybBXaVKi7",
  },
  {
    name: "Fem Små Hus",
    rating: 4.5,
    price: "$$",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    link: "https://maps.app.goo.gl/Zv7kUJkf6mXLoMtx5",
  },
  {
    name: "Operakällaren",
    rating: 4.8,
    price: "$$$$",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    link: "https://maps.app.goo.gl/CAAw1nSojTEuqtLU7",
  },
  {
    name: "Lilla Ego",
    rating: 4.7,
    price: "$$",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    link: "https://maps.app.goo.gl/GySgsKZzL1EifQ5c7",
  },
  {
    name: "Nytorget 6",
    rating: 4.5,
    price: "$$",
    image: "https://images.unsplash.com/photo-1529692236671-f1dc28a2ef22",
    link: "https://maps.app.goo.gl/WaQeop3d71PyUM4A9",
  },
  {
    name: "AG",
    rating: 4.6,
    price: "$$$",
    image: "https://images.unsplash.com/photo-1600891964385-c6c2fa9f1b1b",
    link: "https://maps.app.goo.gl/NUQgoQSb4VYAHAqw8",
  },
  {
    name: "Farang",
    rating: 4.6,
    price: "$$$",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    link: "https://maps.app.goo.gl/URW8uTTmzaEKsWzA6",
  },
  {
    name: "Restaurang Tradition",
    rating: 4.4,
    price: "$$",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468",
    link: "https://maps.app.goo.gl/LCN8UuFLN3qs1mts5",
  },
  {
    name: "Rolfs Kök",
    rating: 4.5,
    price: "$$",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    link: "https://goo.gl/maps/ij1234",
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

