/* let zap = Number(prompt('Введите цвет'));

let sve = 'red';

if (sve === 'red') {
    alert('stop')
} else if (sve === 'yellow') {
    alert('wait')
} else if (sve === 'green') {
    alert(go)
} else {
    console.log('Введите коректный цвет');
    
} */
/*     const numbers = [1,5,6,4,67,89];
    const search = [1,35,6,7,89];
    const even = numbers.filter(n => n % 2 === 0);
    const zero = numbers.map(n => n * 0);
    const pou = search.find(n => n > 2);

    
    console.log(search);
    console.log(zero);
    console.log(numbers); */

/* const fanc = () => {
    
};
 */

    
/* const h1  = document.getElementById('h1');

const color = (prompt('Введите цвет'));

if (color === 'red') {
    document.body.style.background = 'red';
    h1.innerText = 'ты написал red '
} else if (color === 'blue') {
    document.body.style.background = 'blue';
        h1.innerText = 'ты написал blue'

} else if (color === 'green') {
    document.body.style.background = 'green';
    h1.innerText = 'ты написал green'

} else {
    alert('Ошибка');
} */

    const svetafor = prompt('Введите цвет')

    const first = document.getElementById('Bogdan')
    const second = document.getElementById('yellow')
    const sabubu = document.getElementById('sabubu')

       if (svetafor === 'red') {
        first.classList.add('first')
       } else if (svetafor === 'yellow') {
        first.classList.remove('first')
        second.classList.add('yellow')
       } else if (svetafor === 'green') {
        first.classList.remove('red')
        second.classList.remove('yellow')
        sabubu.classList.add('sabubu')
       }
       console.log(first);
       