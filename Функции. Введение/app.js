function logName(name, surname) {
    console.log(`Моё имя ${name} ${surname} `);
}
logName('Леонид', 'Ро');

function countDepositSum(depositInUSD, month, rate) {
    const sum = depositInUSD*(1 + rate/12)**month;
    return sum;
}

function countDepositSum2(depositInUSD, month, rate) {
    return depositInUSD*(1 + rate/12)**month;
}   

const example1 = countDepositSum(1200, 12, 0.08);
console.log(example1);

const example2 = countDepositSum(1200, 24, 0.06);
console.log(example2);

const example3 = countDepositSum2(800, 12, 1.2);
console.log(example3);