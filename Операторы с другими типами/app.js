console.log('Вася' || 'Олег');
console.log(false || 'Олег');
console.log('Вася' || false);
console.log(false || false);

console.log('Вася' && 'Олег');
console.log(false && 'Олег');
console.log('Вася' && false);
console.log(false && false);

let a;
const userNsme = a || 'Петя';
console.log(userNsme);

let b = 'Марина';
const userNsme1 = b || 'Петя';
console.log(userNsme1);

const isAdmin = true;
const fileName = isAdmin && 'file.mp4';
console.log(fileName);