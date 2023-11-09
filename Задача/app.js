const bid = 80;
const hDay = 5;
const work = 40;
const day = 11 - 2;

// Сколько рабочих часов есть до отъезда?
let workDays = day*hDay;
// Успею ли до отъезда?
console.log('Успею ли я? ' + (workDays > work));
// Сколько запросим за работу?
console.log('За работу запросим'  + ' ' + (bid*work));