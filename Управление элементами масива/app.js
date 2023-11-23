const users = ['Аня', 'Вика', 'Катя'];
console.log(users);
users[2] = 'Кристина';// Замена
console.log(users);
users[3] = 'Никита';// Добавление
console.log(users);

const friend = users.push('Саша');// Добавление в конец
console.log(friend);// Возвращает длинну обновленного массива
console.log(users);

const friend1 = users.unshift('Денис');// Добавление в начало
console.log(friend1);// Возвращает длинну обновленного массива
console.log(users);

const friend2 = users.pop();// Удаляет последний элемент
console.log(friend2);// Возвращает последний элемент
console.log(users);

const friend3 = users.shift();// Удаляет первый элемент
console.log(friend3);// Возвращает первый элемент
console.log(users);