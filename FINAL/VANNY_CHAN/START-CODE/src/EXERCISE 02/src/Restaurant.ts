import { Customer } from "./Customer";
import { Menu } from "./Product";
import { Total } from "./Total";
import { Order } from "./Order";

export class Restaurant {
    private name: string
    private customers: Customer[] = [];
    private products: Menu[] = [];

    constructor(name: string) {
        this.name = name
    }

    addCustomer(customer: Customer) {
        this.customers.push(customer);
    }

    addProduct(product: Menu): void {
        this.products.push(product);
    }

    getCustomers(): Customer[] {
        return this.customers;
    }

}