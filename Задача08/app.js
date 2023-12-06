let arr = ['!', 'JS', 'люблю', 'Я'];
let result = [];

for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];
    result.push(element);
}
console.log(result);
console.log(result.join(' '));

console.log(arr.reverse().join(' '));

