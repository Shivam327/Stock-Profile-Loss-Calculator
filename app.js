const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  let ip = Number(initialPrice.value);
  let qty = Number(stocksQuantity.value);
  let curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    let loss = (initial - current) * quantity;
    let lossPercentage = (loss / initial) * 100;

    showOutput(
      `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
    );
  } else if (current > initial) {
    let profit = (current - initial) * quantity;
    let profitPercentage = (profit / initial) * 100;

    showOutput(
      `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
    );
  } else {
    showOutput(`No pain no gain and no gain no pain`);
  }
}

function showOutput(message) {
  outputBox.innerHTML = message;
}
