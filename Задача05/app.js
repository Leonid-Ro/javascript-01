function canBuy(age, job) {
    if (age > 24 && job == true) {
        credit = 500;
    } else if (age > 24) {
        credit = 100;
    } else {
        credit = 0;
    }
    return credit;
}

function result(money) {
    canBuy(25, false);
    if ((credit + money) >= 2000) {
        return true;
    } else {
        return false;
    }
}
console.log(result(1900));

