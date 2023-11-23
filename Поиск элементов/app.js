const roles = ['admin', 'user', 'manager'];
const elIndex = roles.indexOf('manager');// Возвращает номер элемента в массиве.
console.log(elIndex);
const elIndex1 = roles.indexOf('superuser');
console.log(elIndex1);

roles.indexOf('admin') >= 0 ? console.log('Доступ есть!') : console.log('Отказано!');

console.log(roles.includes('admin'));
roles.includes('superuser') ? console.log('Yes!') : console.log('No!');