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

console.log(`${result == 22 ? 'Успех!!!' : result == -8 ? 'Успех!!!' : result == 'Я не робот!' ? 'Успех!!!' : 'Вы - робот!!!' }`);