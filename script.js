const properties = [
  {
    title: "Rumah Modern di Jakarta Selatan",
    location: "Cilandak, Jakarta Selatan",
    price: "Rp 2.500.000.000",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    desc: "Rumah minimalis 2 lantai dengan taman belakang dan garasi luas."
  },
  {
    title: "Villa Mewah di Bali",
    location: "Canggu, Bali",
    price: "Rp 5.800.000.000",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    desc: "Villa dengan pemandangan laut dan kolam renang pribadi."
  },
  {
    title: "Apartemen Premium Surabaya",
    location: "Darmo, Surabaya",
    price: "Rp 1.200.000.000",
    img: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    desc: "Apartemen full furnished di pusat kota."
  }
];

// Tampilkan daftar properti
const list = document.getElementById("property-list");
function renderList(data) {
  list.innerHTML = "";
  data.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div class="card-content">
        <h3>${p.title}</h3>
        <p>${p.location}</p>
        <strong>${p.price}</strong>
      </div>`;
    card.addEventListener("click", () => openModal(p));
    list.appendChild(card);
  });
}
renderList(properties);

// Fitur pencarian
document.getElementById("search").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = properties.filter(p =>
    p.title.toLowerCase().includes(keyword) ||
    p.location.toLowerCase().includes(keyword)
  );
  renderList(filtered);
});

// Modal
const modal = document.getElementById("modal");
function openModal(p) {
  modal.classList.remove("hidden");
  document.getElementById("modal-img").src = p.img;
  document.getElementById("modal-title").textContent = p.title;
  document.getElementById("modal-location").textContent = p.location;
  document.getElementById("modal-price").textContent = p.price;
  document.getElementById("modal-desc").textContent = p.desc;
}
document.getElementById("close-modal").onclick = () => modal.classList.add("hidden");
modal.onclick = e => { if (e.target === modal) modal.classList.add("hidden"); };

// Ganti Tema
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
