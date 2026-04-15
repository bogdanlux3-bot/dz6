/* const buttonElements = document.querySelectorAll("button");

for (button of buttonElements) {
    button.addEventListener("click", (event) => {
        document.body.style.backgroundColor = event.target.innerText;
    })
}

 */


/* const inputElement = document.querySelector('input')
const buttonElement = document.querySelector('button')
const wrapperElement = document.querySelector('.wrapper')


console.log(wrapperElement);

buttonElement.addEventListener("click", () => {

    const blockElement = document.createElement("div");
    wrapperElement.append(blockElement);
    blockElement.setAttribute("class", "block")
    blockElement.innerText = inputElement.value;
    inputElement.value = "";
});  */

/* const inputElement = document.querySelector('input')
const wrapperElement = document.querySelector('.wrapper')
const buttonElement = document.querySelector('button')

buttonElement.addEventListener("click", () => {
    if (inputElement.value.trim()  === "" ) { alert('Введите цвет!');
     return;}
    const blockElement = document.createElement("div");
    wrapperElement.append(blockElement);
    blockElement.classList.add("block")
    blockElement.innerText = inputElement.value;
    blockElement.style.background = (inputElement.value).toLowerCase()
    inputElement.value === "black" && (blockElement.style.color = "white")
    inputElement.value = "";
}); */













































































/* 
const favorites = [
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
  ];

 const yuongest = favorites.reduce((prev, current) => {
    if (prev.age > current.age) return current;
    else return prev;
  }) 
  console.log(yuongest); */





















  /* const treasureObject = {
  key: [
    [
      { value2: "ewfwe" },
      {
        value: {
          object: {
            hello: "world",
            robot: [[], { white: "black" }],
            third: { heisenberg: { treasure: "Treasure found!" } },
          },
        },
      },
    ],
  ],
}; */