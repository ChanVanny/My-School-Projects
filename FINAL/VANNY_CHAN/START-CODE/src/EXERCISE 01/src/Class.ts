
import {Student}from "./Student";
import {ClassMonitor}from "./ClassMonitor";

export class Class{
    private name:string;
    students:Student[]=[];

    constructor(name:string){
        this.name = name
    }

    addStudent(student:Student){
        this.students.push(student)
    }
   
}