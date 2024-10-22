type Pizza = {
    id: number;
    name: string;
    price: number;
}
type Order = {
    id: number;
    pizza: Pizza;
    status: 'ordered' | 'preparing' | 'ready' | 'delivered';
}
let cashinRegister: number = 100;
let orderQueue: Array<Order> = [];
let nextOrderId: number = 1;
let nextPizzaId: number = 1;


let menu: Array<Pizza> = [
    {
        id: nextPizzaId++, name: 'Margherita', price: 8
    },
    {
        id: nextPizzaId++, name: 'Pepperoni', price: 10
    },
    {
        id: nextPizzaId++, name: 'Hawaiian', price: 12
    },
    {
        id: nextPizzaId++, name: 'Veggie', price: 14
    }
]


function addNewPizza(pizzaObj: Omit<Pizza, 'id'>): Pizza {
    const newPizza: Pizza = {
        id: nextPizzaId++,
        ...pizzaObj
    }
    menu.push(newPizza);
    return newPizza;
}
function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj => {
        pizzaObj.name = pizzaName;
    });
    if (!selectedPizza) {
        console.error(`Pizza ${pizzaName} not found in menu`);
        return;
    }
    cashinRegister += selectedPizza.price;
    const newOrder: Order = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: 'ordered'
    };
    orderQueue.push(newOrder);
    return newOrder;
}

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(order => order.id === orderId);
    if (!order) {
        console.error(`Order ${orderId} not found in queue`);
        return;
    } else {
        order.status = 'ordered';
        return order;
    }

}
function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === 'string') {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === 'number') {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        console.error('Invalid identifier provided');
        return;
    }
}

addNewPizza(
    { name: 'Chicken', price: 16 });
addNewPizza(
    { name: 'Bacon', price: 18 });
addNewPizza(
    { name: 'Sausage', price: 15 });

placeOrder('Chicken');
completeOrder(1);

console.log('menu:', menu)
console.log('cashinRegister:', cashinRegister)
console.log('orderQueue:', orderQueue)