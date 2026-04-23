document.addEventListener("DOMContentLoaded", () => {
  const filterSelect = document.getElementById("rating-filter");
  const products = document.querySelectorAll(".product-card");
  const grid = document.querySelector(".product-grid");

  filterSelect.addEventListener("change", () => {
    const selectedValue = filterSelect.value;
    let hasVisibleProduct = false;

    products.forEach((product) => {
      const rating = parseInt(product.getAttribute("data-rating"), 10);
      if (selectedValue === "all" || rating >= parseInt(selectedValue, 10)) {
        product.style.display = "block";
        hasVisibleProduct = true;
      } else {
        product.style.display = "none";
      }
    });

    if (!hasVisibleProduct) {
      grid.innerHTML = "<p>Nenhum produto encontrado com essa avaliação.</p>";
    }
  });
});
