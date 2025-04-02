const products = [
  {
    label: "Хит продаж",
    image: "./svg/cube-shop-card.svg",
    discount: "25%",
    brand: "Бренд",
    title:
      "Полное название товара в несколько строк для вида с обрывом в конце...",
    price: "5 990 ₽",
    oldPrice: "5 990 ₽",
  },
];

for (let i = 1; i < 14; i++) {
  products.push({ ...products[0] });
}

export default products;

// Решение заданий

// 1. Написать функцию для получения списка всех артикулов товаров в консоли браузера на странице
// https://groupprice.ru/categories/jenskaya-odejda?referer_from=main_catalog

function getAllProductArticles() {
  let articles = [];
  document.querySelectorAll("div._product").forEach((el) => {
    articles.push(el.getAttribute("data-product-mini-card"));
  });
  console.log(articles);
}
getAllProductArticles();

// 2. Написать функцию для получения всех характеристики товара в консоли браузера в виде объекта в формате attributeName: value на странице
// https://nir-vanna.ru/product/smesitel-bravat-art-f175109c-dlya-rakoviny/

function getAllProductAttributes() {
  let attributes = [];
  document
    .querySelectorAll("li.tab-pane-product-parameter-item")
    .forEach((el) => {
      let keyEl = el.querySelector(".parameter-name").innerText;
      let valueEl = el.querySelector(".parameter-value").innerText;

      attributes[keyEl] = valueEl;
    });
  console.log(attributes);
}
getAllProductAttributes();
