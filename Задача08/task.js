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

let users1 = ['Аня', 'Вика', 'Катя', 'Маша', 'Лена', 'Петя'];
let resultUs1 = [];
let arrayTwo = ['user', 'admin', 'manager', 'superuser'];
let arrayNew = [];

function plusElement(users, resultUs, leter) { // Исходный массив, конечный массив, вставляемое слово.    
    for (let index = 0; index = users.length; index++) {
        let superUs = users.shift(); // Удаляет первый элемент
        resUs = `${leter}, ${superUs}!`; // Возвращает первый элемент    
        resultUs.push(resUs); // Добавление в конец          
    }
}
plusElement(users1, resultUs1, 'Hi');
console.log(resultUs1);
plusElement(arrayTwo, arrayNew, 'Привет');
console.log(arrayNew);