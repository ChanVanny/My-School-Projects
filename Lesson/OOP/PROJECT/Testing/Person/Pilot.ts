import { Employee } from "./Employee";
import { Gender } from "./Gender";

export class Pilot extends Employee {
    constructor(firstName: string, lastName: string, phoneNumber: string, gender: Gender, salary: number){
        super(firstName, lastName, phoneNumber, gender, salary)
    }
}