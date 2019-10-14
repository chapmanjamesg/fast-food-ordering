const restaurant = {
    order: [],
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        if(meal === chickenComboMeal){
            this.order.push(chickenComboMeal)
        }else if (meal === cheeseBurgerComboMeal){
            this.order.push(cheeseBurgerComboMeal)
        }else if (meal === baconCheeseBurgerComboMeal){
            this.order.push(baconCheeseBurgerComboMeal)
        }else if (meal === spicyChickenComboMeal){
            this.order.push(spicyChickenComboMeal)
        }
    }
}
const chickenComboMeal = {
    sandwichType: 'Chicken Sandwich',
    fries: true,
    drinkSize: 'large'
}
const cheeseBurgerComboMeal = {
    sandwichType: 'Cheeseburger',
    fries: true,
    drinkSize: 'large'
}
const baconCheeseBurgerComboMeal = {
    sandwichType: 'Bacon Cheeseburger',
    fries: true,
    drinkSize: 'large'
}
const spicyChickenComboMeal = {
    sandwichType: 'Spicy Chicken Sandwich',
    fries: true,
    drinkSize: 'large'
}



// Place an order
restaurant.placeOrder(chickenComboMeal)
console.log(restaurant.order)
// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()