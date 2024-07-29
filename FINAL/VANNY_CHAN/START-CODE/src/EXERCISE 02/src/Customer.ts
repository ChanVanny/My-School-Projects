
import { Person } from "./Person";
import { Order } from "./Order";

export class Customer extends Person {
    private orders: Order[]= [];

    constructor(id: number, name: string) {
        super(id, name);
    }

    addOrder(order: Order): void {
        this.orders.push(order);
    }

    getOrders(): Order[] {
        return this.orders;
    }
}

