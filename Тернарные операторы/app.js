const bmwX3Price = 100000;
const fordFocus = 10000;
const budget = 20000;
let massege;

if (budget > bmwX3Price) {
    massege = 'BMW';
    //console.log('BMW');
} else if (budget > fordFocus) {
    massege = 'Ford';
    //console.log('Ford');
} else {
    massege = 'Велосипед'
    //console.log('Велосипед');
}
console.log(`Я хочу купить ${massege}`);


if (budget > bmwX3Price) {
    massege = 'BMW';
    //console.log('BMW');
} else {
    massege = 'Велосипед'
    //console.log('Велосипед');
}
console.log(`Я хочу купить ${massege}`);

10 > 0 ? console.log('Больше 0') : console.log('Не больше 0');
const str = 10 > 0 ? 'Больше 0' : 'Не больше 0';
console.log(str);

console.log(`Я собираюсь купить ${budget > bmwX3Price ? 'BMW': 'Велосипед'}`);

const want = `Я собираюсь купить ${budget > bmwX3Price ? 'BMW': budget > fordFocus ? 'Ford' :  'Велосипед'}`;
console.log(want);