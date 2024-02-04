/* Task - 1 (Not required)
    Написати свою реалізацію функції isNaN. 
    
    Нагадування: це глобальна функція в JavaScript, яка використовується для перевірки, чи є значення NaN (Not-a-Number). 
*/
var Kate
 console.log(isNaN(Kate)); 
 console.log(isNaN(NaN)); 
 console.log(isNaN(undefined)); 
 console.log(isNaN("KATTTE")); 
 console.log(isNaN(86)); 
 console.log(isNaN("25")); 


/* Task - 2
    Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні 
    від 100 до 1000 включно. Порахувати кількість парних та непарних серед них. 
    Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? Приклад функції checkProbabilityTheory(count). 
    Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

    Функція виводить інформацію
    Кількість згенерованих чисел: кількість чисел
    Парних чисел: кількість парних чисел
    Не парних чисел: кількість не парних чисел
    Відсоток парних до не парних

*/

function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < count; i++) {
      let randomNum = Math.floor(Math.random() * 901) + 100; // Генеруємо випадкове число від 100 до 1000
      if (randomNum % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
    console.log("Кількість згенерованих чисел:", count);
    console.log("Парних чисел:", evenCount);
    console.log("Непарних чисел:", oddCount);
    console.log("Відсоток парних до непарних:", (evenCount / count * 100).toFixed(2) + "%", (oddCount / count * 100).toFixed(2) + "%");
  }
  checkProbabilityTheory(100);


/* Task - 3
    Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true), яка приймає чотири аргументи:

    рядок, до якого буде додаватися символ.
    символ, який буде додаватися.
    Скільки додавати символів
    булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
    Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте знаачення 6, то додаєте тільки один символ
*/

function pad(str, symbol, times, isStart) {
    if (isStart) {
      return symbol.repeat(times) + str;
    } else {
      return str + symbol.repeat(times);
    }
  }
  console.log(pad('qwerty', '+', 5, true)); // Результат: "+++++qwerty"
  console.log(pad('qwerty', '+', 5, false)); // Результат: "qwerty+++++"