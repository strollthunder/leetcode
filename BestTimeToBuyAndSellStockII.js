/**
 * Created by walkthunder on 15/11/6.
 */

/**
 *
 * Say you have an array for which the ith element is the price of a given stock on day i.
 *
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like
 * (ie, buy one and sell one share of the stock multiple times).
 *
 * However, you may not engage in multiple transactions at the same time
 * (ie, you must sell the stock before you buy again).
 *
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var profits = 0;
    var priceIndex = 0;
    var profit = 0;
    prices.forEach(function(price, index) {
        profit = price-priceIndex;
        if(index > 0 && profit > 0) {
            profits = profits + profit;
        }

        priceIndex = price;
    });
    return profits;
};