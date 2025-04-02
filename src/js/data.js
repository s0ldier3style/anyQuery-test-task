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
