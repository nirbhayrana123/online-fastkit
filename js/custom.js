 
const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", function() {
  let value = searchInput.value.toLowerCase();

  products.forEach(function(product) {
    let name = product.getAttribute("data-name").toLowerCase();

    if (name.includes(value)) {
      product.style.display = "";   // 🔥 important fix
    } else {
      product.style.display = "none";
    }
  });
});
 