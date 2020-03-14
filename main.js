alert("Let's make a pizza.");

// const customerName = prompt("What is your name?", "John Doe");
//
// const pieCount = prompt("How many pizzas will you be ordering? Enter integer e.g. (1, 3, etc.)", "2");
//
// //turning string into number
// pieCount = parseInt(pieCount);
//
// let serviceFee = 0;
//
// //determining serviceFee
// if(pieCount >= 1 && pieCount < 3){
//   serviceFee = pieCount * 3;
// } else if (pieCount < 5){
//   serviceFee = pieCount * 2;
// } else {
//   serviceFee = 0;
// }
//
// console.log(customerName + ", you are ordering " + pieCount + " pizzas.");
// console.log("The current service fee is: $" + serviceFee + ".00");
//
// const pizzaSize = prompt("Enter the size of the pizza: S, M, or L", "S").toLowerCase();
// let perPizzaPrice;
//
// //determining perPizzaPrice based on size from prompt
// switch(pizzaSize){
//   case 's':
//     perPizzaPrice = 8;
//     break;
//   case 'm':
//     perPizzaPrice = 12;
//     break;
//   case 'l':
//     perPizzaPrice = 16;
// }
// // let subTotalPrice = 0;
//
// //determining subTotalPrice based on pizzaSize and perPizzaPrice, adding in serviceFee per pizza
// let subTotalPrice = (perPizzaPrice * pieCount) + serviceFee;
//
//
// console.log(customerName + ", the subtotal of your order is: $" + subTotalPrice + ".00");
//
// alert("Okay! " + customerName + ", let's create your pizza.");
//
//
// const ingredients = ['pepper', 'olive', 'mushroom', 'onion', 'pineapple', 'pepperoni', 'bacon', 'sausage', 'ham', 'anchovy'];
//
// let ingredientsText = "Enter a topping: ";
//
// //looping through ingredients variable to autopopulate ingredientsText, which goes to the prompt found below
// for(let i = 0; i < ingredients.length; i++){
//   ingredientsText += ingredients[i];
//   if(i < ingredients.length - 1){
//     ingredientsText += ', ';
//   } else {
//     ingredientsText += '.';
//   }
// }
//
// console.log(ingredientsText);
//
// // This will be an array of the user's selected ingredients
// let orderIngredients = [];
//
// // This will be a comma separated text of user's pizza ingredients
// let pizzaToppingsStatus = "";
//
// //setting standard variable to make it so they are currently creating pizza
// let creatingPizza = true;
//
// //while loop to determine how many times to ask what toppings they want. If they are still creating pizza, keep asking about toppings.
// while(creatingPizza){
//   let toppingToAdd = prompt(ingredientsText, "Pepperoni");
//   orderIngredients.push(toppingToAdd);
//
//   let addAnother = prompt("Add another topping? Enter yes or no.", "No").toLowerCase();
//
//   if (addAnother === "yes"){
//     creatingPizza = true;
//   } else {
//     creatingPizza = false;
//   }
// }
//
// //looping through orderIngredients list to determine how to present the ingredients the pizza will have.
// for (let k = 0; k < orderIngredients.length; k++){
//   if (orderIngredients.length === 1){
//     pizzaToppingsStatus += orderIngredients[0];
//   } else if (orderIngredients.length === 2){
//     pizzaToppingsStatus += orderIngredients[k];
//     if(k === 0){
//       pizzaToppingsStatus += ' and ';
//     }
//   } else {
//     pizzaToppingsStatus += orderIngredients[k];
//     if(k < orderIngredients.length - 2){
//        pizzaToppingsStatus += ', ';
//        }  else if (k < orderIngredients.length - 1){
//       pizzaToppingsStatus += ', and';
//     }
//   }
// }
//
//   console.log("Your " + pizzaToppingsStatus + " pizza looks delicious.");
//
// //gathering size variable for final cost
//
// let size = "";
//
// if (pizzaSize === 's'){
//   size = 'small';
// } else if (pizzaSize === 'm'){
//   size = 'medium';
// } else {
//   size = 'large';
// }
//
// //determining extraCharge based on amount of toppings
// let extraToppingsFee = 0;
//
// if(orderIngredients.length > 1){
// for (let k = 1; k <= orderIngredients.length; k++){
//   let extraCharge;
//   switch(orderIngredients[k]){
//          case 'pepper':
//          extraCharge = 1;
//          break;
//          case 'olive':
//          extraCharge = 1;
//          break;
//          case 'mushroom':
//          extraCharge = 1;
//          break;
//          case 'onion':
//          extraCharge = 1;
//          break;
//          case 'pineapple':
//          extraCharge = 1;
//          break;
//          default:
//          extraCharge = 1.5;
//   }
//   extraToppingsFee += extraCharge;
//  }
// }
//
// //declaring variables needed for entire cost
// let totalPrice = 0;
// const taxRate = 0.05;
// let basePizzaPrice = 0;
// let salesTax = 0;
//
//   let basePizzaPrice = pieCount * perPizzaPrice;
//
//   let extraToppingsFee = extraToppingsFee * pieCount;
//
//   let salesTax = (basePizzaPrice + extraToppingsFee + serviceFee) * taxRate;
//
//   let totalPrice = basePizzaPrice + extraToppingsFee + salesTax + serviceFee;
//
//
// alert(customerName + ", you ordered " + pieCount + " " + size + ", " + pizzaToppingsStatus + " pizza(s)."
// "Base Price: $" + basePizzaPrice.toFixed(2)
// "Service fee: $" + serviceFee.toFixed(2)
// "Extra toppings fee: $" + extraToppingsFee.toFixed(2)
// "Sales tax 5%: $" + salesTax.toFixed(2)
// "----------------------------");
// "TOTAL: $" + totalPrice.toFixed(2))
