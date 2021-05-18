const {describe, it} = require('mocha');
const {assert} = require('chai');

let pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
}


describe("Tests", function() {
        it("MakeAnOrder", function() {

            let order1 = {orderedPizza: 'pizza1', orderedDrink: 'coke'}
            let order2 = {orderedPizza: 'pizza2'}
            let order3 = {orderedDrink: 'pepsi'}
           
        
            assert.equal(pizzUni.makeAnOrder(order1),`You just ordered ${order1.orderedPizza} and ${order1.orderedDrink}.`)
            assert.equal(pizzUni.makeAnOrder(order2),`You just ordered ${order2.orderedPizza}`)
            assert.throw(()=>(pizzUni.makeAnOrder(order3),Error('You must order at least 1 Pizza to finish the order.')))
        });
        it('GetRemainingWork', function() {
let orders1 = [{pizzaName: 'pizza1', status: 'ready'},{pizzaName: 'pizza2', status: 'preparing'},{pizzaName: 'pizza3', status: 'preparing'},];
let orders2 = [{pizzaName: 'pizza1', status: 'ready'},{pizzaName: 'pizza2', status: 'ready'},{pizzaName: 'pizza3', status: 'ready'},];
let orders3 = [];
assert.equal(pizzUni.getRemainingWork(orders1),`The following pizzas are still preparing: pizza2, pizza3.`)
assert.equal(pizzUni.getRemainingWork(orders2),'All orders are complete!')
assert.equal(pizzUni.getRemainingWork(orders3),'All orders are complete!')
        });
        it('orderType', function() {
assert.equal(pizzUni.orderType(100, 'Carry Out'),90)
assert.equal(pizzUni.orderType(100, 'Delivery'),100)
        });

     });

