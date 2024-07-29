
class Person{
    name: string;
    address: string;

    constructor(name: string, address: string){
        this.name = name;
        this.address = address;
    }

    class student extends Person{
        constructor(name: string, address: string) {
            super(name, address);
            
        }
    }
}