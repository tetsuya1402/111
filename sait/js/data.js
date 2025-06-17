// 🌙 Відновлення теми при завантаженні
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}
function toggleTheme() {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

// 👤 Відображення користувача
const user = localStorage.getItem('user');
const loginLink = document.getElementById('login-link');
const logoutBtn = document.getElementById('logout-btn');
const welcomeText = document.getElementById('welcome-text');

function updateUserUI() {
  if (user) {
    welcomeText.textContent = `👋 Вітаю, ${user}`;
    loginLink.style.display = 'none';
    logoutBtn.style.display = 'inline-block';
  }
}
function logout() {
  localStorage.removeItem('user');
  window.location.reload();
}
updateUserUI();

// 📦 Базові товари
const defaultProducts = [
  {
    id: 1,
    name: "Футболка біла",
    price: 500,
    category: "Футболки",
    image: "images/product1.jpg",
    description: "Легка та зручна футболка білого кольору з 100% бавовни."
  },
  {
    id: 2,
    name: "Костюм",
    price: 700,
    category: "Костюми",
    image: "images/product2.jpg",
    description: "Елегантний костюм для особливих випадків."
  },
  {
    id: 3,
    name: "Куртка",
    price: 5100,
    category: "Куртки",
    image: "images/product3.jpg",
    description: "Тепла куртка для холодної погоди з водовідштовхувальним покриттям."
  },
  {
    id: 4,
    name: "Кроссовки",
    price: 4100,
    category: "Кроссовки",
    image: "images/product4.jpg",
    description: "Зручні кросівки для спорту та прогулянок."
  },
  {
    id: 5,
    name: "Футболка сіра",
    price: 500,
    category: "Футболки",
    image: "images/product5.jpg",
    description: "Легка та зручна футболка сірого кольору з 100% бавовни."
  },
  {
    id: 6,
    name: "Футболка стрейчова сіра",
    price: 500,
    category: "Футболки",
    image: "images/product6.jpg",
    description: "Легка та зручна футболка сірого кольору з 100% стрейч."
  },
  {
    id: 7,
    name: "Крутий комплект/Костюм",
    price: 1900,
    category: "Костюми",
    image: "images/product7.jpg",
    description: "Крутий чоловічий комплект з 100% бавовни."
  },
  {
    id: 8,
    name: "Куртка",
    price: 4000,
    category: "Куртки",
    image: "images/product8.jpg",
    description: "Тепла куртка."
  },
   {
    id: 9,
    name: "Комплект Футболок",
    price: 1200,
    category: "Футболки",
    image: "images/product8.jpg",
    description: "Легкі та зручні футболки з 100% бавовни."
  },
  {
    id: 10,
    name: "Футболка",
    price: 400,
    category: "Футболки",
    image: "images/product10.jpg",
    description: "Легка та зручна футболка."
  },
  {
    id: 11,
    name: "Футболка сіра",
    price: 500,
    category: "Футболки",
    image: "images/product5.jpg",
    description: "Легка та зручна футболка сірого кольору з 100% бавовни."
  },
  {
    id: 12,
    name: "Футболка сіра",
    price: 500,
    category: "Футболки",
    image: "images/product5.jpg",
    description: "Легка та зручна футболка сірого кольору з 100% бавовни."
  },
  {
    id: 13,
    name: "Футболка сіра",
    price: 500,
    category: "Футболки",
    image: "images/product5.jpg",
    description: "Легка та зручна футболка сірого кольору з 100% бавовни."
  },
  {
    id: 14,
    name: "Футболка сіра",
    price: 500,
    category: "Футболки",
    image: "images/product5.jpg",
    description: "Легка та зручна футболка сірого кольору з 100% бавовни."
  },
  {
    id: 15,
    name: "Футболка сіра",
    price: 500,
    category: "Футболки",
    image: "images/product5.jpg",
    description: "Легка та зручна футболка сірого кольору з 100% бавовни."
  },
  {
    id: 16,
    name: "Футболка сіра",
    price: 500,
    category: "Футболки",
    image: "images/product5.jpg",
    description: "Легка та зручна футболка сірого кольору з 100% бавовни."
  },
  {
    id: 17,
    name: "Футболка сіра",
    price: 500,
    category: "Футболки",
    image: "images/product5.jpg",
    description: "Легка та зручна футболка сірого кольору з 100% бавовни."
  },
  {
    id: 18,
    name: "Футболка сіра",
    price: 500,
    category: "Футболки",
    image: "images/product5.jpg",
    description: "Легка та зручна футболка сірого кольору з 100% бавовни."
  },
  {
    id: 19,
    name: "Футболка сіра",
    price: 500,
    category: "Футболки",
    image: "images/product5.jpg",
    description: "Легка та зручна футболка сірого кольору з 100% бавовни."
  },
  {
    id: 20,
    name: "Футболка сіра",
    price: 500,
    category: "Футболки",
    image: "images/product5.jpg",
    description: "Легка та зручна футболка сірого кольору з 100% бавовни."
  },
];

// ➕ Адмінські товари
const adminProducts = JSON.parse(localStorage.getItem("adminProducts")) || [];
const products = [...defaultProducts, ...adminProducts];

// 🖼️ Вивід товарів
function displayProducts(items) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';
  items.forEach(product => {
    productList.innerHTML += `
      <div class="card">
        <a href="product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
        </a>
        <p>${product.price} грн</p>
        <button onclick="addToCart(${product.id})">До кошика</button>
      </div>
    `;
  });
}

// 🛒 Додавання до кошика
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ id, size: 'M' }); // За замовчуванням M
  localStorage.setItem('cart', JSON.stringify(cart));
  alert("Товар додано до кошика!");
}

// 🔍 Пошук і фільтрація
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('category-filter');

function filterProducts() {
  const query = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query) &&
    (category === '' || p.category === category)
  );
  displayProducts(filtered);
}

searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);

// ▶️ Старт: вивести всі товари
displayProducts(products);