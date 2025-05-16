const products = [
  {
    name: "Wireless Headphones",
    price: 99,
    category: "Electronics",
    rating: 4.5,
  },
  { name: "LED Monitor", price: 199, category: "Electronics", rating: 4.7 },
  { name: "T-Shirt", price: 25, category: "Clothing", rating: 4.2 },
  { name: "Hoodie", price: 40, category: "Clothing", rating: 4.6 },
  { name: "JavaScript Book", price: 30, category: "Books", rating: 4.9 },
  { name: "Notebook", price: 10, category: "Books", rating: 4.1 },
  { name: "Krama", price: 300, category: "Books", rating: 4.9 },
  {
    name: "Three Mistake of my life",
    price: 130,
    category: "Books",
    rating: 3.9,
  },
];

const container = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");

function displayProducts(productList) {
  container.innerHTML = "";
  productList.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: ₹${product.price}</p>
      <p>Rating: ⭐ ${product.rating}</p>
    `;
    container.appendChild(card);
  });
}

function filterAndSort() {
  let filtered = [...products];

  const selectedCategory = categoryFilter.value;
  const selectedSort = sortOption.value;

  if (selectedCategory !== "all") {
    filtered = filtered.filter((p) => p.category === selectedCategory);
  }

  switch (selectedSort) {
    case "priceLowHigh":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "priceHighLow":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "ratingHighLow":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", filterAndSort);
sortOption.addEventListener("change", filterAndSort);

// Initial load
displayProducts(products);

document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const header = document.querySelector("header");
  const heroSection = document.getElementById("hero-section");

  // Restore dark mode state from localStorage
  const savedMode = localStorage.getItem("darkMode") === "true";
  if (savedMode) {
    document.body.classList.add("dark-mode");
    header.classList.add("dark-mode");
    if (heroSection) heroSection.classList.add("dark-mode");
    darkModeToggle.textContent = "Light Mode";
  }

  // Toggle dark mode
  darkModeToggle.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
    if (heroSection) heroSection.classList.toggle("dark-mode");
    darkModeToggle.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    localStorage.setItem("darkMode", isDarkMode);
  });
});
// menu bar open and close
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".nav-bar2");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
});
