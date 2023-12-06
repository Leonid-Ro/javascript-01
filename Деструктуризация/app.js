const userData = ['Anton', 18, 'Moscow'];

//const userName = userData[0];
//const userAge = userData[1];
//const userCity = userData[2];

//console.log(userName, userAge, userCity);

function getData() {
    return userData //['Anton', 18, 'Moscow'];
}

//const userName1 = getData()[0];
//const userAge1 = getData()[1];
//const userCity1 = getData()[2];



const [userName, userAge, userCity] = userData;
console.log(userName, userAge, userCity);

