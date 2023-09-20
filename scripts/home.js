const products = [
  {
    name: "Zanahorias",
    price: 2,
  },
  {
    name: "Tomates",
    price: 0.5,
  },
  {
    name: "Huevos",
    price: 1,
  },
  {
    name: "Papas",
    price: 3,
  },
  {
    name: "Champis",
    price: 5,
  },
  {
    name: "Espinacas",
    price: 0.1,
  },
  {
    name: "Pimientos",
    price: 2,
  },
];

const productsListEl = document.querySelector(".products");

const currentProduct = products[0];

// creamos los el
const productItemEl = document.createElement("li");
productItemEl.classList.add("products__item", "products__item--product");

const productNameEl = document.createElement("p");
productNameEl.classList.add("item__name");
productNameEl.innerHTML = currentProduct.name;

const productButtonEl = document.createElement("button");
productButtonEl.classList.add("item__button");
productButtonEl.innerHTML = "+1";

// metemos el dentro del product item
productItemEl.appendChild(productNameEl);
productItemEl.appendChild(productButtonEl);

// metemos el product item en la lista de productos
productsListEl.appendChild(productItemEl);
