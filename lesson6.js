/* Task - 1
    Створіть масив (array1) з 5 любих елементівю
    Створіть функцію, яка буде повертати другий елемент з масиву
*/

var arr = ["I","You","They","He","It"]
console.log(arr[1])

/* Task - 2
    Створіть функцію, який додасть 1 елемент до масиву з попередньої задачи (array1) (наприклад, "new item")
*/
arr[5] = 'array1'
console.log(arr)

/* Task - 3
    Створіть другий масив (array2), потім створить функцію, яка отримує 2 масиви і повертає масив, що містить елементи з масивів array1 та array2
*/
var array2 = ["She","We","Us","Them","People"];
function mergeArrays(arr1, arr2) {
var mergedArray = arr1.concat(arr2);
return mergedArray;
}
console.log(mergeArrays(arr, array2)); 

/* Task - 4 (Not required)
    Створіть функцію, яка буде повертає новий масив заданої довжини, заповнений заданим значенням
    https://www.w3schools.com/jsref/jsref_fill.asp


*/

function createArray(length, value) {
    return Array(length).fill(value);
    }
    console.log(createArray(5, "me"));

/* Task - 5 (Not required)
    Створіть функцію , яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає кількість людей, чиє ім'я "John" або вік менший за 30
     не використовуйте цикли
*/
function countYoungAndJohnPeople(people) {
    return people.filter(person => person.name.includes("John") || person.age < 30).length;
    }
    
    var peopleArray = [
    {name: "John Snow",
    age: 45},
    {name: "Cersei Lannister", 
    age: 32},
    {name: "Daenerys Targaryen",
     age: 18},
    {name: "Jorah Mormont", 
    age: 28}
    ];
    
    console.log(countYoungAndJohnPeople(peopleArray));

/* Task - 6 (Not required)
    Створіть функцію , яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає новий масив усіх людей, старших за 30 років
*/
function getPeopleOver30(people) {
    return people.filter(person => person.age > 30);
    }
    
    console.log(getPeopleOver30(peopleArray));


/* Task - 7 (Not required)

    Створіть функцію, яка буде приймати масив об'єктів
    наприклад, [{ім'я: "Jane", вік: 45}, {ім'я: "Peter", вік: 18}].
    та поверне новий масив об'єктів, що містить додаткову властивість "state"
    state = "baby", якщо вік дорівнює 0 або 3,
    state = "preschooler", якщо вік від 4 до 5,
    state = "teenager", якщо вік від 13 до 18 років

 https://www.w3schools.com/jsref/jsref_map.asp
*/

function getNameArray(people) {
    return people.map(person => person.name);
    }
    
    var peopleArray2 = [
    {name: "Kate", 
    age: 22},
    {name: "Radik",
     age: 32}
    ];
    
    console.log(getNameArray(peopleArray2)); 

/* Task - 8 (Not required)

    Створити функцію для знаходження індексу мінімального елементу масиву;
    наприклад,  console.log(minItem([6,8,2,9,1,3])) // 4
*/

/* Task - 9 (Not required)

   Створити функцію, яка поверне кількість допустимих (НЕ not null/undefined) значень масиву
*/


/* Task - 10 (Not required)

   Створити функцію, яка відфільтрує нульові та невизначені значення
  якщо кількість невірних записів більше 3 - потрібно згенерувати помилку "Дані потрібно переглянути"
*/

