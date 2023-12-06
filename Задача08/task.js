let array = ['user', 'admin', 'manager', 'superuser'];
let arr = ['counter', 'security'];

for (let index = array.length - 1; index >= 0; index--) {
    const element = array.slice([index]);
    console.log(element);
}

console.log(array.concat(arr));

console.log('**********');

for (let index = array.length - 1; index >= 0; index--) {
    const element = array.splice([index]);
    console.log(element);
}
console.log(array);

console.log('**********');

const users = ['Аня', 'Вика', 'Катя', 'Маша', 'Лена', 'Петя'];
let resultUs = [];


for (let index = 0; index = users.length; index++) {
    let superUs = users.shift(); // Удаляет первый элемент
    resUs = `Привет, ${superUs}!`; // Возвращает первый элемент
    console.log(resUs);
    resultUs.push(resUs); // Добавление в конец    
}
console.log(resultUs);