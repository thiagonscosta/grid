window.onload = () => {
  init();
};

async function fetchCoins() {
  const coins = await axios.get(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
  );
  return coins.data;
}

async function init() {
  const coins = await fetchCoins();
  Object.entries(coins).map((e) => {
    card(e);
  });
}

const card = (data) => {
  const el = document.createElement("div");
  el.classList.add("col", "card");
  el.appendChild(title(data[0]));
  const parent = document.getElementById("app");
  parent.appendChild(el);
};

const title = (data) => {
  const el = document.createElement("h3");
  el.style.textAlign = "center";
  el.innerHTML = data;
  return el;
};
