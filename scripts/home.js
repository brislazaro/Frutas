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

for (let i = 0; i < products.length; i++) {
  const currentProduct = products[i];

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
}

const cart = [
  {
    name: "Zanahorias",
    price: 2,
    quantity: 3,
  },
  {
    name: "Tomates",
    price: 0.5,
    quantity: 1,
  },
  {
    name: "Huevos",
    price: 1,
    quantity: 2,
  },
];

const cartListEl = document.querySelector(".cart");

for (let i = 0; i < cart.length; i++) {
  const currentItem = cart[i];

  const itemCart = document.createElement("li");
  itemCart.classList.add("cart__item");

  const itemName = document.createElement("p");
  itemName.classList.add("item__name");
  itemName.innerHTML = currentItem.name;

  itemCart.appendChild(itemName);

  const itemQuantity = document.createElement("p");
  itemQuantity.classList.add("item__quantity");
  itemQuantity.innerHTML = currentItem.quantity;

  itemCart.appendChild(itemQuantity);

  const buttonItem = document.createElement("div");
  buttonItem.classList.add("item__buttons");

  itemCart.appendChild(buttonItem);

  const itemButtonLess = document.createElement("button");
  itemButtonLess.classList.add("item__button");
  itemButtonLess.innerHTML = "-1";

  buttonItem.appendChild(itemButtonLess);

  const itemButtonPlus = document.createElement("button");
  itemButtonPlus.classList.add("item__button");
  itemButtonPlus.innerHTML = "+1";

  buttonItem.appendChild(itemButtonPlus);

  cartListEl.appendChild(itemCart);
}
