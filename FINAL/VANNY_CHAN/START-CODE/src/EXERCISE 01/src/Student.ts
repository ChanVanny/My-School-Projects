
import { Person } from "./Person";

export class Student extends Person{
    private phone:number;

    constructor(phone:number, name:string, age:number){
        super(name,age)
        this.phone = phone;
    }

    public getPhone(): number{
        return this.phone;
    }
}