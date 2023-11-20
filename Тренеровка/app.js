/*const gasEasy = 50.99;
const gasPower = 54.45;
//const fuelConsToyota = 6;
//const fuelConsFord = 8;
const distKM = 190;

function countFuelToyota(fuelConsToyota, wayKM) {
    return (fuelConsToyota * wayKM)/100;
}

function countFuelFord(fuelConsFord, wayKM) {
    return (fuelConsFord * wayKM/100);
}

function costWay(volume, costGas) {
    return volume * costGas;
}

const resToyota = countFuelToyota(6, distKM);
const resFord = countFuelFord(8, distKM);

const  Toyota = costWay(resToyota, gasPower);
const Ford = costWay(resFord, gasEasy);

console.log(resToyota);
console.log(resFord);

console.log(`Стоимость поездки Toyota на ${distKM}км. = ${Toyota} руб.`);
console.log(`${Ford}`);
*/
const way = 210;

function countFuelToyota(consumption, distanсe) {
   return (consumption * distanсe)/100;    
}
const quantityToyota = countFuelToyota(5.6, way);
console.log(quantityToyota);

function countFuelFord(consumption, distanсe) {
    return (consumption * distanсe)/100;    
 }
 const quantityFord = countFuelFord(8.4, way);
 console.log(quantityFord);

 function costFuelDistace(quantity, costFuel) {
    return quantity * costFuel;
 }

 const costToyota = costFuelDistace(quantityToyota, 50.5);
 const costFord = costFuelDistace(quantityFord, 46.5);
 console.log(`Чтобы проехать ${way} км Тойоте нужно ${quantityToyota} литров топлива АИ-95, стоимостью ${costToyota} рублей.`);
 console.log(`Чтобы проехать ${way} км Форду нужно ${quantityFord} литров топлива АИ-92, стоимостью ${costFord} рублей.`);

