/*  var a = 'Bogdan'
var b = 103;
var c
console.log(typeof c);
console.log(b === a);
console.log(b > 100);
console.log(b - a);
console.log(typeof b);
console.log(typeof a); 

//Калькулятор скидок//

var sum = Number(prompt("Введите сумму"));
if (typeof sum === "number") {
  if (sum < 100) {
        console.log("Скидки нет,сумма" + sum);
  }else if(sum >= 100 && sum < 500) {
    console.log("скидка 5 %"+ (sum-(sum * 0.05)).toFixed(2));
    
  } else if (sum >= 500 && sum < 1000) {
    console.log("Скидка 10%" +(sum -(sum * 0.1)).toFixed(2));
    
  }  else if (sum >= 1000) {
    console.log("Скидка 15%" + (sum -(sum * 0.15)).toFixed(2));
    
  }
} else {
  console.log('Введите число');
  
} 
 */