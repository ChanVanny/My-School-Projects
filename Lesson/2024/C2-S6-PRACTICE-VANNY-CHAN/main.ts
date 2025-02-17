import { Feedback } from "./feedback";
import { Customer } from "./customer"; 
import { Product } from "./product";
import { Store } from "./store";

// Add Customer 
let customer1 = new Customer("Vanny", "Princeess");
let customer2 = new Customer("Chanthou", "Kmeng Toch");
let customer3 = new Customer("Rin", "Dog");

// Add Feedback 
let feedBack1 = new Feedback("It's good!", 80);
feedBack1.setCustomerFeedback(customer1);
feedBack1.setCustomerFeedback(customer2);
let feedBack2 = new Feedback("It's bad!", 20);
feedBack2.setCustomerFeedback(customer2);
let feedBack3 = new Feedback("It's acceptable!", 70);
feedBack3.setCustomerFeedback(customer3)

// Add Product 
let product1 = new Product("Watch", 1000);
product1.addFeedback([feedBack1])
let product2 = new Product("Laptop", 800);
product2.addFeedback([feedBack2,feedBack3])
let product3 = new Product("iPhone", 2000);
product3.addFeedback([feedBack3])

// Add Products and Customers to store 
let vanvanStore = new Store("VanVan Online Shop");
vanvanStore.addProduct([product1, product2, product3]);
vanvanStore.addCustomer([customer1, customer2, customer3])


// Console Log 
// console.log(product1)
// console.log(product2)
// console.log(product3)

// console.log(feedBack1)
// console.log(feedBack2)
// console.log(feedBack3)

console.log(vanvanStore.getProductLessThan(2000))
console.log(vanvanStore.getFeedbackContaining("bad"))
console.log(vanvanStore.getCustomerComments(customer2))



