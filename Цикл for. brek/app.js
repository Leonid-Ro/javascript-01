// for
let tasks = ['Task1', 'Task2', 'Task3'];
for (let index = 0; index < tasks.length; index++) {
    const element = tasks[index];
    console.log(element);
}

for (let i = 0; i < tasks.length; i ++) {
    if (tasks[i] === 'Task2') {
        continue;    // Проруск элемента Task2   
    }
    console.log(tasks[i]);
}

for (let i = 0; i < tasks.length; i ++) {
    if (tasks[i] === 'Task3') {
        break;
    }
    console.log(tasks[i]);
}