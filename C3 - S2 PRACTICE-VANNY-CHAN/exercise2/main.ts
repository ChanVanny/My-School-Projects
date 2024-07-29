import { School } from "./SCHOOL";
import { Student } from "./SCHOOL";
import { Classroom } from "./SCHOOL";

//create scholl
let PNC = new School('PNC');
let PNV = new School('PNV');


//create classroom
let classA = new Classroom(PNC, 'Class: A');
let classB = new Classroom(PNV, 'Class: B');

//create student
let Hak = new Student('Senghak', 'Chhun');
let Roth = new Student('Roth', 'Samrith');
let Cha = new Student('Cha', 'Em');
let Ching = new Student('Soching', 'Chun');

//add student to the classroom
classA.addStudent(Hak);
classA.addStudent(Roth);
classA.addStudent(Cha);
// console.log(classA);

PNC.addClassroom('ClassA');
console.log(PNC);