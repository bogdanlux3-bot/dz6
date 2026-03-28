 const orders = [
  {
    id: 1,

    customer: "Jhon",

    items: [
      { name: "Ноутбук", price: 50000, quantity: 1 },

      { name: "Мышь", price: 1500, quantity: 2 },
    ],
  },

  {
    id: 2,

    customer: "Alan",

    items: [
      { name: "Телефон", price: 30000, quantity: 1 },

      { name: "Чехол", price: 1000, quantity: 3 },
    ],
  },

  {
    id: 3,

    customer: "Jane",

    items: [
      { name: "Клавиатура", price: 2500, quantity: 1 },

      { name: "Монитор", price: 12000, quantity: 1 },
    ],
  },
];
 


let totalIncome = 0;
let maxOrderSum = 0;
let MaxCustomer = "";

for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    let orderSum = 0;

    
    for (let j = 0; j < order.items.length; j++) {
        let item = order.items[j];
        orderSum = orderSum + item.price * item.quantity;
    }

    console.log("Сумма заказа клиента " + order.customer + ": " + orderSum);

    totalIncome = totalIncome + orderSum;

    if (orderSum > maxOrderSum) {
        maxOrderSum = orderSum;
        MaxCustomer = order.customer;
    }
}

console.log("Общий доход магазина: " + totalIncome);
console.log("Самый дорогой заказ у клиента " + MaxCustomer + ": " + maxOrderSum);