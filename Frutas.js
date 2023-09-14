const usersMock = [
  {
    username: "brisa",
    password: "sirenita",
    role: "admin",
  },
  {
    username: "gerard",
    password: "megamierda",
    role: "user",
  },
  {
    username: "solde",
    password: "1234",
    role: "admin",
  },
];

let selectedUser = null;

// obtener elementos del DOM
const userNameEl = document.querySelector(".user");
const passwordEl = document.querySelector(".password");

function handleClick() {
  // 1- Obtener el valor de los inputs (con takataEl.value)
  const user = userNameEl.value;
  const password = passwordEl.value;
  // 2- Buscar si en mi array de usuarios, hay uno con el username introducido

  for (let i = 0; i < usersMock.length; i++) {
    const element = usersMock[i];
    if (element.username === user && element.password === password) {
      window.open("home.html", "_self");
      return;
    }
  }

  alert("Wrong credentials");
}
