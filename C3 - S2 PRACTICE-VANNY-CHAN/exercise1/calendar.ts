import { person } from "./person";

export class calendar{
    private currentYear: number;

    constructor(){
        this.currentYear = 2024;
    }

    public getAge(years: number) {
        return this.currentYear - years;
    }
}