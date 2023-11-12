const role = 'Manager';

if (role === 'Manager') {
    console.log('Это менеджер.');
} else if (role === 'Almin') {
    console.log('Это админ.');
} else if (role === 'SEO') {
    console.log('Это СЕО.');
} else {
    console.log('Мы тебя незнаем!');
}


switch (role) { //role === 'Manager';
    case 'Manager':
        console.log('Это менеджер..');
        break;
    case 'Admin':
        console.log('Это админ..');
        break;
    case 'SEO':
        console.log('Это СЕО');
        break;
    default:
        console.log('Мы тебя незнаем!');
}


switch (role) { //role === 'Manager';
    case 'Manager':
    case 'Admin':
        console.log('Это не руководитель..');
        break;
    case 'SEO':
        console.log('Это руководитель..');
        break;
    default:
        console.log('Мы тебя незнаем!');
}


const nam = 1;

switch (true) {
    case nam > 0:
        console.log('Полжительный.');
        break;
    case nam < 0:
        console.log('Отрицательный.');
        break;
    default:
        console.log('Ноль.');
}