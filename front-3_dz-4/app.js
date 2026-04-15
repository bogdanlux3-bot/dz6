
/*   let numbers = [1,2,3,4,5];
 numbers.push(6)
 numbers.shift(0)
  const evenNumber = numbers.filter(num => num % 2 === 0) *///- Отфильтрованные чётные числа
/*  console.log(numbers);
 */  
 /* console.log(numbers,evenNumber); */ //итог фильтрации

 //новый массив нде все числа уможены на 5!
 /* let arrayNew = [1,2,3,4,5];
 const newArray = numbers.map(arrayNew => arrayNew * 5)
 console.log(newArray); */

 //еще один массив для среднего арифметического выражения всех чисел! и сортировка!
/* const arr = [10 , 13 , 67 , 34 ,3 ]
arr.sort((a, b) => {
return a - b;
});
const total = arr.reduce((a , b) =>  a + b , 0 ) / arr.length   
console.log(total,arr); */

 //Второе задание!

  /* const favorites = [
    {name: "Маикл Джордан", age: 47, role: "Basketball player"},
    {name: "MrBeast", age: 25, role: "Blogger"},
    {name: "Дуэн Джонсон", age: 30, role: "Actor"},
    {name: "А4", age: 28, role: "Blogger"},
    {name: "Бред Питт", age: 60, role: "Actor"},
    {name: "Алан Рикман", age: 70, role: "Actor"},
    {name: "Богдан", age: 16, role: "Senior developer"},
    {name: "Джейкоб Блэк", age: 28, role: "Actor"},
    {name: "Чарли Чаплин", age: 68, role: "Actor"},
    {name: "Чынгыз Айтматов", age: 78, role: "Writer"},
  ]
  const onlyNames = favorites.map(el => el.name)// массив состоящий только из имён знаменитостей!
  console.log(onlyNames); 

   const NamePlusRoles = favorites.map(el => `${el.name} is a ${el.role}`)//Массив в формате  Богдан Jackson is a sеnior developer
  console.log(NamePlusRoles); 


const agess = favorites.reduce((el, max) => el.age > max.age ? el : max ) // самый старший и самый младший среди них!
const ages = favorites.reduce((el, min) => el.age < min.age ? el : min)

const ager = agess.age - ages.age // разница между ними!


console.log(agess,ages); //самый старший и самый младший вывод в консоль
console.log(ager) //разница между ними!



const searchForMinors = favorites.some(el => el.age < 18)// проверка на несовереннолетнего
console.log(searchForMinors);


const peopleWhoAreOverTwenty = favorites.filter(el => el.age > 20) //Люди которым больше 20!
console.log(peopleWhoAreOverTwenty);
 */

  