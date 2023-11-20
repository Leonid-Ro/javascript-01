const ballanse = 1000;
const bonusBallanse = 100;

const isBannet = false;
const isExist = false;
const isSelling = true;

if ((ballanse >= 1000 || bonusBallanse >= 100) && !isBannet && !isExist && isSelling)  {
    console.log('Он может купить!');
} else {
    console.log('Не может!');
}