import products from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  const cardSection = document.querySelector(".product__card__section-list");

  products.forEach((product) => {
    const cardHTML = `
      <div class="product__card">
        <div class="product__card__top">
          <span class="product__card__label">
            ${product.label} <img src="./svg/fire.svg" alt="Хит продаж" />
          </span>
          <img class="product__card__image" src="${product.image}" alt="Изображение товара" />
          <span class="product__card__discount">${product.discount}</span>
        </div>

        <div class="product__card__info">
          <span class="product__card__brand">${product.brand}</span>
          <p class="product__card__title">${product.title}</p>

          <div class="product__card__prices">
            <span class="product__card__price">${product.price}</span>
            <span class="product__card__old-price">${product.oldPrice}</span>
          </div>
        </div>
        <button class="product__card__button">Купить</button>
      </div>
    `;

    cardSection.innerHTML += cardHTML;
  });
});

document.querySelectorAll(".filters__category-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector(".search-input");
  const backArrow = document.querySelector(".search-back-arrow");
  const searchButton = document.querySelector(".search-button");
  const searchIcon = document.querySelector(".search__icon");

  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      backArrow.classList.add("visible");
      searchButton.classList.add("visible");
      searchIcon.classList.add("hide-icon");
    } else {
      backArrow.classList.remove("visible");
      searchButton.classList.remove("visible");
      searchIcon.classList.remove("hide-icon");
    }
  });

  backArrow.addEventListener("click", () => {
    input.value = "";
    backArrow.classList.remove("visible");
    searchButton.classList.remove("visible");
    searchIcon.classList.remove("hide-icon");
    input.focus();
  });

  const brandInput = document.querySelector(".filters__brand-search input");
  const clearButton = document.querySelector(".filters__clear-icon");
  const filterSearchButton = document.querySelector(".filters__search-button");

  brandInput.addEventListener("input", () => {
    if (brandInput.value.trim() !== "") {
      clearButton.classList.add("visible");
      filterSearchButton.classList.add("visible");
    } else {
      clearButton.classList.remove("visible");
      filterSearchButton.classList.remove("visible");
    }
  });

  clearButton.addEventListener("click", () => {
    brandInput.value = "";
    clearButton.classList.remove("visible");
    filterSearchButton.classList.remove("visible");
    brandInput.focus();
  });
});
