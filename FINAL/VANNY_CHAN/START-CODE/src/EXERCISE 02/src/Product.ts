
export enum Menu{
    PIZZA,
    MEAL,
    COCA,

}

export class Pizza{
    private name: string;
    description: string;
    price: number;
    menus: Menu[]=[];

    constructor(name: string, description: string, price: number){
        this.name = name;
        this.description = description;
        this.price = price;
    }

    // add menu to product
    addMenu(menu: Menu){
        this.menus.push(menu);
    }

    // add menu to product
    getMenus():Menu[]{
        return this.menus;
    }

    // add name to product
    getName(): string{
        return this.name;
    }

    // add description to product
    getDescription(): string{
        return this.description;
    }

    // add price to product
    getPrice(): number{
        return this.price;
    }
}