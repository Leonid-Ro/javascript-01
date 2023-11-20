const KG_IN_USD = 7;
const KM_IN_USD = 10;

function calculateW(present) {
    return present * KG_IN_USD;
}

function calculateKm(distanse) {
    return distanse * KM_IN_USD;
}

function getExchangePrice(present1, present2, distanse){
    const price1 = calculateW(present1);
    const price2 = calculateW(present2);
    const distansePrice = calculateKm(distanse);
    return price1 + price2 + distansePrice;
}
const getExPrice = getExchangePrice(2, 3, 1);
console.log(`Надо потратить ${getExPrice} USD.`);