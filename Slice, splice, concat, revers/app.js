const roles = ['user', 'admin', 'manager', 'superuser'];

//slice
/*const res = roles.slice(2);
console.log(roles);
console.log(res);

const res2 = roles.slice(2, 3);
console.log(roles);
console.log(res2);

const res3 = roles.slice(-3);
console.log(roles);
console.log(res3);

const res4 = roles.slice(1, -1);
console.log(roles);
console.log(res4);

// splice
const res5 = roles.splice(2);
console.log(roles);
console.log(res5);
*/
const res6 = roles.splice(2, 1);
console.log(roles);
console.log(res6);

const res7 = roles.splice(-1);
console.log(roles);
console.log(res7);

// reverse
const res8 = roles.reverse();
console.log(res8);
console.log(roles);

// concat
const newRoles = ['sisadmin', 'developer'];
const res9 = roles.concat(newRoles);
console.log(res9);