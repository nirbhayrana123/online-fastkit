 
let cart = {};

let products = {
  "Item1": {price:25, img:"images/tamto.jpg", weight:"250 g"},
  "Item2": {price:20, img:"images/tamto.jpg", weight:"100 g"},
  "Item3": {price:30, img:"images/tamto.jpg", weight:"100 g"},
  "Item4": {price:40, img:"images/tamto.jpg", weight:"100 g"},
  "Item5": {price:40, img:"images/tamto.jpg", weight:"100 g"},
  "Item6": {price:40, img:"images/tamto.jpg", weight:"100 g"},
  "Item7": {price:40, img:"images/tamto.jpg", weight:"100 g"} ,
  "Item8": {price:40, img:"images/tamto.jpg", weight:"100 g"} ,
  "Item9": {price:40, img:"images/tamto.jpg", weight:"100 g"} ,
  "Item10": {price:40, img:"images/tamto.jpg", weight:"100 g"} ,
  "Item11": {price:40, img:"images/tamto.jpg", weight:"100 g"} ,
  "Item12": {price:40, img:"images/tamto.jpg", weight:"100 g"} ,
  "Item13": {price:40, img:"images/tamto.jpg", weight:"100 g"} ,
  "Item14": {price:40, img:"images/tamto.jpg", weight:"100 g"} ,
  "Item15": {price:40, img:"images/tamto.jpg", weight:"100 g"} ,
  "Item16": {price:40, img:"images/tamto.jpg", weight:"100 g"} ,
  "Item17": {price:40, img:"images/tamto.jpg", weight:"100 g"} ,
  "Item18": {price:40, img:"images/tamto.jpg", weight:"100 g"} ,
  "Item19": {price:40, img:"images/tamto.jpg", weight:"100 g"} ,
  "Item20": {price:40, img:"images/tamto.jpg", weight:"100 g"}  
};

/* INIT */
window.onload = () => {
  for (let name in products) renderButton(name);
};

/* ADD */
function addItem(name) {
  if (!cart[name]) {
    cart[name] = {...products[name], qty:1};
  } else {
    cart[name].qty++;
  }
  renderButton(name);
  updateCart();
}

/* CHANGE */
function changeQty(name, change) {
  cart[name].qty += change;
  if (cart[name].qty <= 0) delete cart[name];

  renderButton(name);
  updateCart();
}

/* BUTTON */
function renderButton(name) {
  let div = document.getElementById("cart-"+name);
  if (!div) return; // 🔥 important

  let item = cart[name];

  if (!item) {
    div.innerHTML = `<button class="add-btn" onclick="addItem('${name}')">ADD</button>`;
  } else {
    div.innerHTML = `
      <div class="qty-box">
        <button onclick="changeQty('${name}',-1)">-</button>
        <span>${item.qty}</span>
        <button onclick="changeQty('${name}',1)">+</button>
      </div>
    `;
  }
}
/* CART UPDATE */
function updateCart() {
  let cartItems = document.getElementById("cartItems");
  let total = 0;
  let count = 0;

  cartItems.innerHTML = "";

  for (let name in cart) {
    let item = cart[name];
    total += item.price * item.qty;
    count += item.qty;

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}">
        <div class="cart-info">
          <p>${name}</p>
          <p>${item.weight}</p>
          <p class="cart-price">₹${item.price}</p>
        </div>

        <div class="qty-box">
          <button onclick="changeQty('${name}',-1)">-</button>
          <span>${item.qty}</span>
          <button onclick="changeQty('${name}',1)">+</button>
        </div>
      </div>
    `;
  }

  document.getElementById("totalPrice").innerText = total;
  document.getElementById("cartCount").innerText = count;
}

/* TOGGLE */
function toggleCart() {
  document.getElementById("cartSidebar").classList.toggle("active");
}
document.querySelector(".cart-header").addEventListener("click", function() {
  document.getElementById("cartSidebar").classList.remove("active");
});

/* =========search code ========*/

const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", function() {
  let value = searchInput.value.toLowerCase();

  productCards.forEach(function(product) {
    let name = product.getAttribute("data-name").toLowerCase();

    if (name.includes(value)) {
      product.style.display = "";    
    } else {
      product.style.display = "none";
    }
  });
});