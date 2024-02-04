/* Task - 1 
Створіть об'єкт "Людина" з щонайменше трьома властивостями (рік, ім'я, прізвище). 

Завдання:
- Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
- Напишіть метод getFullName(), який виводитиме повне ім'я. 
*/


var human = {
    age: 22,
    name: "Kate",
    surname: "Kuksa",
getInfo: function () {
    console.log(" Age: " + human.age +  " name: " + human.name + " surname: " + human.Sname);
}
}

human.getInfo();

var human = {
    age: 22,
    name: "Kate",
    surname: "Kuksa",
    get fullName() {
        return `${this.name} ${this.surname}`;
      }
    };
    
    console.log(human.fullName);


/* Task - 2 (Not required)
   Створіть функцію createRobot, яка створить об'єкт "robot" з об'єкта "person", 
   додавши додаткову властивість до об'єкта "person". 
   "Robot" повинен мати властивість "batteryEnergy" (наприклад, batteryEnergy = 50)

 * ПРИМІТКА: використовуйте метод присвоєння об'єктів (Object.assign)
*/

function createRobot(person) {
    const robot = Object.assign({}, person);
    robot.batteryEnergy = 50;
    return robot;
  }
  const person = {
    name: 'Kate',
    age: 25,
  };
  const robot = createRobot(person);
  console.log(robot);

/* Task - 3 
   Створіть isARobot, який буде перевіряти, чи є об'єкт роботом
   перевіркою наявності у об'єкта властивості (batteryEnergy)
*/
var oji = {
    batteryEnergy: "робот"
 };

    if (oji.hasOwnProperty('batteryEnergy')){
        console.log("Є властивості");
    } else
    console.log("Нема, цигани вкрали");



/* Task - 4 (Not required)

Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:

var services = {
	"стрижка": "60",
	"гоління": "80",
	"Миття голови": "100"
};

Завдання:
- створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
- створити метод minPrice() - який повертає мінімальний price
- створити метод maxPrice() - який повертає максимальний price
*/
const services = {
    "стрижка": "60",
    "гоління": "80",
    "Миття голови": "100",
  };
  function price(services) {
    let totalPrice = 0;
    for (const service in services) {
      totalPrice += parseInt(services[service]);
    }

    return totalPrice;
  }
  function minPrice(services) {
    let min = Infinity;
    for (const service in services) {
      const price = parseInt(services[service]);
      if (price < min) {
     min = price;
      }
    }
    return min;
  }
  function maxPrice(services) {
    let max = -Infinity;
    for (const service in services) {
      const price = parseInt(services[service]);
      if (price > max) {
      max = price;
}
    }
    return max;
  }
  console.log(price(services)); 
  console.log(minPrice(services)); 
  console.log(maxPrice(services));