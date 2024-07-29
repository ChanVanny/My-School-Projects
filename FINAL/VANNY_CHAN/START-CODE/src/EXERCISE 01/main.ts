
import { School } from "./src/School";
import {Class} from "./src/Class";
import {Student} from "./src/Student";
import {ClassMonitor} from "./src/ClassMonitor";
import {Person} from "./src/Person";

let school = new School("PNC");
let classA = new Class("Web A");
let studentA = new Student(1234553, "Vanny", 21);
let studentB = new Student(11212345, "Nich", 22);
let classMonitor = new ClassMonitor("Dany", 20, 11216733)


classA.addStudent(studentA);
classA.addStudent(studentB);
classA.addStudent(classMonitor)
school.addClass(classA);

console.log(studentA.getPhone());


console.log(school);