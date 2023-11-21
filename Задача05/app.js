function canBuy(age, job) {
    age > 24 && job == true ? credit = 500 : age > 24 ? credit = 100 : credit = 0;
}
function result(money) {
    canBuy(25, false);
    (credit + money) >= 2000 ? res = true : res = false;
}
result(1900)
console.log(res);
/*
if (age > 24 && job == true) {
        credit = 500;
    } else if (age > 24) {
        credit = 100;
    } else {
        credit = 0;
    }
*/
/*
if ((credit + money) >= 2000) {
        return true;
    } else {
        return false;
    }
*/