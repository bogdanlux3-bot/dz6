//Инкапсуляция
class Person {
  constructor({ name, age, tall, weight, eyeColor, swede, gender }) {
    this.name = name;
    this.age = age;
    this.tall = tall;
    this.weight = weight;
    this.eyeColor = eyeColor;
    this.swede = swede;
    this.gender = gender;
  }

  //Абстракция
  birthday() {
    this.age++;
    console.log(this.name + " теперь " + this.age + " лет");
  }
}

// Наследование
class Student extends Person {
  constructor({ name, age, tall, weight, eyeColor, swede, gender, charisma }) {
    super({ name, age, tall, weight, eyeColor, swede, gender });
    this.charisma = charisma;
  }
}

// Полиморфизм
class Worker extends Person {
  birthday() {
    this.age++;
    console.log(this.name + " стал старше и пошел на работу!!!!");
  }
}

// 3 объекта
const marlonGarcia = new Person({
  name: "marlonGarcia",
  age: 20,
  tall: 195,
  weight: 90,
  eyeColor: "blue",
  swede: "beautiful",
  gender: "male",
});

const anna = new Student({
  name: "Anna",
  age: 18,
  tall: 167,
  weight: 55,
  eyeColor: "black",
  swede: "blonde",
  gender: "female",
  charisma: 10,
});

const tom = new Worker({
  name: "Tom",
  age: 24,
  tall: 178,
  weight: 75,
  eyeColor: "brown",
  swede: "none",
  gender: "male",
});

// вызовы
marlonGarcia.birthday();
console.log(anna.charisma);
tom.birthday();