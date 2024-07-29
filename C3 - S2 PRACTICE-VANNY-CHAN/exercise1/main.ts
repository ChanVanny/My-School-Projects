import { person } from "./person";
import { calendar } from "./calendar";

let chanthou = new person('Chanthou');
let vanny = new person('Vanny');
let rin = new person('rin');
let Calendar = new calendar();


//set age for person
chanthou.setyear(2005);
vanny.setyear(2003);
rin.setyear(2001);
// console.log(chanthou);


//get name of person
// console.log(chanthou.getName());

//get year of birth of the person
// console.log(chanthou.getyearOfBirth());

//get age of the person
// console.log(Calendar.getAge(chanthou.getyearOfBirth()));
// console.log(Calendar.getAge(vanny.getyearOfBirth()));
// console.log(Calendar.getAge(rin.getyearOfBirth()));
