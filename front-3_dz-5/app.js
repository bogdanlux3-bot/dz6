/* const student = { 
   name: "Ivan", 
   age: 21, 
   skills: ["js", "css"]
   };

const {name,age} = student;
console.log(name,age); */


// 2).Получить значения в массиве skills - js и css через деструктуризацию
/* const {skills} = student;
console.log(...skills); */

// 3). Создать функцию printStudent() которая принимает объект студента и выводит строку вида:"Student Ivan, age 21". Внутри функции данные студента также извлечь через деструктуризацию . 

/* function printStudent( {name,age} ) {
console.log(`student ${name}, age ${age}`); 

}
printStudent(student); */


//2) Задание! 
/* function sumAndMultiply (first, ...number) {
  const sum = number.reduce((acc,num) => acc + num, 0)
  return sum * first; 
}
console.log(sumAndMultiply(2, 3, 4, 5));
 */

//3) Задание! 

const arrayFirst = [4, 5, 6]
const arraySecond = [1, 2]
const arrayThird = [9, 10]
const arrayFourth = [3]
const arrayFiveth = [7, 8]

const spreadArray = [
  ...arrayFirst,
  ...arraySecond,
  ...arrayThird,
  ...arrayFourth,
  ...arrayFiveth
]

const OrdinalArraySpread = spreadArray.sort((a, b) => a - b);
console.log(spreadArray);
 