const button = document.getElementById("convert-button");
const select = document.getElementById("currency-select");

const convertValues = async () => {
  const inputReal = document.getElementById("input-real").value;
  const realValueText = document.getElementById("real-value-text");
  const currencyValueText = document.getElementById("currency-value-text");

  const data = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
  ).then((response) => response.json());

  const dolar = data.EURBRL.high;
  const euro = data.USDBRL.high;
  const bitcoin = data.BTCBRL.high;

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReal);

  if (select.value === "US$ Dólar americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReal / dolar);
  }

  if (select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReal / euro);
  }

  if (select.value === "₿ Bitcoin") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputReal / bitcoin);
  }
};

changecurrency = () => {
  const currencyName = document.getElementById("currency-name");
  const imgCurrency = document.getElementById("img-currency");

  if (select.value === "US$ Dólar americano") {
    currencyName.innerHTML = "Dólar americano";
    imgCurrency.src = "./img/estados-unidos (1) 1.svg";
  }

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro";
    imgCurrency.src = "./img/euro.svg";
  }

  if (select.value === "₿ Bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    imgCurrency.src = "./img/bitcoin.svg";
  }
  convertValues();
};

button.addEventListener("click", convertValues);
select.addEventListener("change", changecurrency);