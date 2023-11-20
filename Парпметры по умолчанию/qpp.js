/*function toPower(num, power) {
    const power2 = power ?? 2;
    const res = num ** power2;
    return res;
}*/

function toPower(num = 3, power = 2) {    
    const res = num ** power;
    return res;
}

console.log(toPower(2, 4));
console.log(toPower());