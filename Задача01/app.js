const deposit = 11000;
const rate = 0.07;
const depositLenth = 24;
const houseCost = 13500;

const res = deposit * (1 + rate / 12) ** depositLenth;

if (res > houseCost) {
    console.log(`Мы накопили: ${res}. Сможем купить дом. Остаток: ${res - houseCost}`);
} else {
    console.log(`Мы накопили: ${res}. Не сможем купить дом. Не хватит: ${houseCost - res}`);
}