/* const valueElement = document.querySelector("#value");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");

let count = 0;

const updateValue = () => {
  valueElement.textContent = count;

  if (count === 0) {
    valueElement.style.color = "black";
  }
};

incrementBtn.addEventListener("click", () => {
  count ++;
  valueElement.style.color = 'lime'
  updateValue()
});

decrementBtn.addEventListener("click", () => {
if (count > 0) {
    count --;
  valueElement.style.color = 'red'
  updateValue()
}

}); */
/*  2 задание */


/* const box = document.querySelector('.box');
const xElement = document.querySelector('.x');
const yElement = document.querySelector('.y');

box.addEventListener('mousemove', (event) => {
  const x = event.offsetX;
  const y = event.offsetY;

  xElement.textContent = x;
  yElement.textContent = y;
}); */

/* 3 задание */

const input = document.querySelector('input');

input.addEventListener('input', (e) => {
  document.body.style.backgroundColor = e.target.value;
});