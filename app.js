const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");
const body = document.querySelector("body");

const submitHandler = () => {
  let buyingPrice = Number(initialPrice.value);
  let quantity = Number(stocksQuantity.value);
  let currPrice = Number(currentPrice.value);

  calculateProfitAndLoss(buyingPrice, quantity, currPrice);
};

const calculateProfitAndLoss = (buyingPrice, quantity, currPrice) => {
  if (currPrice < buyingPrice) {
    let loss = (buyingPrice - currPrice) * quantity;
    let lossPercentage = (loss / buyingPrice) * 100;
    if (lossPercentage > 50) {
      body.style.backgroundColor = "red";
      outputBox.style.backgroundColor = "red";
    }
    showOutput(
      `It was a bad Day, you made a loss of Rs.${loss} and the loss percent is ${lossPercentage}%`
    );
  } else if (currPrice > buyingPrice) {
    let profit = (currPrice - buyingPrice) * quantity;
    let profitPercentage = (profit / buyingPrice) * 100;
    body.style.backgroundColor = "lightgreen";
    outputBox.style.backgroundColor = "lightgreen";

    showOutput(
      `Horray, You made the profit of Rs.${profit} and the profit Percent is ${profitPercentage}%`
    );
  } else {
    showOutput(
      `Nither You Lost Anything,Nither You Gained Anything, Wait for Your Right Time`
    );
  }
};

function showOutput(message) {
  outputBox.innerHTML = message;
}

submitBtn.addEventListener("click", submitHandler);
