function canAcessWebsite (age) {
    if (age < 18) {
        return 'Нет!'
    }
        return 'Да!'
}

console.log(canAcessWebsite(19));

const canAcessWebsite2 = age => age < 18 ? 'Нет' : 'Да';
console.log(canAcessWebsite2(19));