let stocks = [
    { name: "Apple", symbol: "AAPL", price: 175, trend: "up" },
    { name: "Microsoft", symbol: "MSFT", price: 310, trend: "up" },
    { name: "Amazon", symbol: "AMZN", price: 3200, trend: "down" },
    { name: "Tesla", symbol: "TSLA", price: 700, trend: "up" },
    { name: "Google", symbol: "GOOGL", price: 2900, trend: "down" },
    { name: "Meta", symbol: "META", price: 365, trend: "up" },
    { name: "NVIDIA", symbol: "NVDA", price: 830, trend: "up" },
    { name: "Netflix", symbol: "NFLX", price: 450, trend: "down" },
    { name: "Adobe", symbol: "ADBE", price: 580, trend: "up" },
    { name: "Intel", symbol: "INTC", price: 42, trend: "down" }
];

let balance = 1000;
let portfolio = {};


function loadStocks() {
    let stockList = document.getElementById("stock-list"); let stockSelect = document.getElementById("stock-select");

 stockList.innerHTML = "";
    stockSelect.innerHTML = "";
 stocks.forEach((stock, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${stock.name}</td>
            <td>${stock.symbol}</td>
            <td>$${stock.price}</td>
            <td class="${stock.trend === "up" ? "trend-up" : "trend-down"}">${stock.trend.toUpperCase()}</td>
        `;
     stockList.appendChild(row);

        let option = document.createElement("option");
        option.value = index;
        option.text = `${stock.name} (${stock.symbol})`;
        stockSelect.appendChild(option);
    });
}
function updatePortfolio() {
  let portfolioList = document.getElementById("portfolio-list");
    portfolioList.innerHTML = "";

    for (let symbol in portfolio) {
        let stock = stocks.find(stock => stock.symbol === symbol);
        let row = document.createElement("tr");
  row.innerHTML = `
            <td>${stock.name}</td>
            <td>${portfolio[symbol]}</td>
            <td>$${(portfolio[symbol] * stock.price).toFixed(2)}</td>
        `;
 portfolioList.appendChild(row);
    }
}
function buyStock() {
    let index = document.getElementById("stock-select").value;
 let amount = parseInt(document.getElementById("amount").value);
    let stock = stocks[index];

    if (balance >= stock.price * amount) {
        balance -= stock.price * amount;

        if (portfolio[stock.symbol]) {
            portfolio[stock.symbol] += amount;
        } else {
            portfolio[stock.symbol] = amount;
        }

        document.getElementById("balance").innerText = balance;
        updatePortfolio();
    } else {
        alert("Not enough balance!");
    }
}


function sellStock() {
    let index = document.getElementById("stock-select").value;
    let amount = parseInt(document.getElementById("amount").value);
    let stock = stocks[index];

    if (portfolio[stock.symbol] && portfolio[stock.symbol] >= amount) {
        portfolio[stock.symbol] -= amount;
        balance += stock.price * amount;
        document.getElementById("balance").innerText = balance;
        updatePortfolio();
    } else {
        alert("You don't have enough shares to sell!");
    }
}

loadStocks();