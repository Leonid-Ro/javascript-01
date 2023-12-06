const url = 'https://purpleshcool.ru/course/javascript';
const ur2 = '//purpleshcool.ru/course/javascript';

function getUrlPuth(url) {
    const [protocol, _, host, ...puth] = url.split('/');
    if (protocol === 'https:' || protocol === 'http:') {
        console.log([protocol, _, host, ...puth]);
        console.log(`Протокол: ${protocol.split(':')[0]}`);
        console.log(`Доменное имя: ${host}`);
        console.log(`Путь внутри сайта: /${puth.join('/')}`);
    }
}

getUrlPuth(url);