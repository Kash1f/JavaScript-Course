const maxProfit = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    minPrice = Math.min(minPrice, currentPrice);
    const currentProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, currentProfit);
  }
    return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);

console.log(profit);
