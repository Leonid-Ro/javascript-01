let result = prompt('Сколько будет 7 + или - 15?');
console.log(result);

switch (result) {
    case '22':
    case '-8':
    case 'Я не робот!':
        console.log('Успех!');
        break;
    default:
        console.log('Вы - робот!');
        break;
}

switch (true) {
    case Number(result) === 22:
    case Number(result) === -8:
    case result === 'Я не робот!':
        console.log('Успех!?');
        break;
    default:
        console.log('Вы - робот!?');
        break;
}

console.log(`${Number(result) === 22 ? 'Успех!!!' : Number(result) === -8 ? 'Успех!!!' : result === 'Я не робот!' ? 'Успех!!!' : 'Вы - робот!!!' }`);
const res = `${Number(result) === 22 || Number(result) === -8 || result === 'Я не робот!' ? 'Успех! Да!' : 'Вы есть робот!'}`;
console.log(res);