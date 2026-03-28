/* var svetafor = String(prompt('Введите цвет'));

  if (svetafor === 'red') {
    alert('СТОП');
  } else if (svetafor === 'green') {
    alert('Идите')
  } else if (svetafor === 'yellow') {
    alert('Ждите')
  } else {
    alert('Выберите конкретный цвет')
  }  */

    function arrMax (arr) {
    var Max = arr[0];
    for (var i = 1; i < length.arr; i++) {
      if (arr[i] > Max) {
        Max = arr[i];
      }
    }  
    return  Max;
    }
  



    console.log(1,arrMax([1488,1,5,3,9,2]));
    console.log(2,arrMax([10,20,5,7]));
    console.log(3,arrMax([-1,-5,-3]));

    