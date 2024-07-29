import { Total } from "./Total";
import { Menu} from "./Product";
import {Customer} from "./Customer";

export class Order {
    private customer: Customer;
    private product: Menu;
    private total:Total

    constructor(customer: Customer, product: Menu, total: Total) {
        this.customer = customer;
        this.product = product;
        this.total = total;
    }

    getCustomer(): Customer {
        return this.customer;
    }
}