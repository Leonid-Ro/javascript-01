const money = 60;
const canBuy = money > 50;
if (canBuy) { // money > 50
    console.log('Может купить наш продукт.');
} else if (money >= 5) {
    console.log('Можно купить другой продукт.');
} else {
    console.log('Не хватает баланса.');
}
console.log(`Итог: переменная canbuy ${canBuy}`);