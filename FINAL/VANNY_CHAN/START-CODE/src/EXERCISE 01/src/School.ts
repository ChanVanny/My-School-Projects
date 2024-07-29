import { Class } from "./Class";

export class School{
    private name:string;
    classes:Class[]=[];

    constructor(name:string){
        this.name = name;

    }

    addClass(classA:Class){
        this.classes.push(classA)
    }

}