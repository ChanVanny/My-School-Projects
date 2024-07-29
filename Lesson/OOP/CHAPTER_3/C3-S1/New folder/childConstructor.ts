class Person{
    name: string;
    address:string;

    constructor(name:string, address:string){
        this.name = name;
        this.address = address;
    }
}


class Employee extends Person {
    salary: number;

    constructor(name: string, address:string, salary:number) {
        super(name, address);
        this.salary = salary;
    }
}

let vanny = new Employee("vanny", "paris", 300);
console.log(vanny);
