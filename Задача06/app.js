// Добавление задачи в конец.
const tasks = ['Task01'];

function addEnd(task) {
    return tasks.push(task)
}
const res1 = addEnd('Task02');
console.log(tasks);

// Удаление задачи по названию.
const tasks1 = ['Task001', 'Task002', 'Task003'];

function removeEnd(index) {
    const ind = tasks1.indexOf(index)
    if (ind === -1) {
        console.log('Несуществующий элемент!');
        return;
    }
    tasks1.splice(ind, 1);
    console.log(ind);
}
removeEnd('Task003');
console.log(tasks1);

// Перенос задачи в начало списка по названию.
const task2 = ['Task11', 'Task12', 'Task13', 'Task14'];

function preoritize(index2) {
    if (task2.indexOf(index2) === -1) {
        console.log('Несуществующий элемент!');
        return;
    } else {
        const old = task2.splice((task2.indexOf(index2)), 1);
        console.log(old[0]);
        task2.unshift(old[0]);
    }
}
preoritize('Task14');
console.log(task2);