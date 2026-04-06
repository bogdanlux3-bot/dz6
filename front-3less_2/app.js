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

const inputElement = document.querySelector('input')
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
});