
/*
 INSTRUCTIONS
	1 -  Create a type  `Person` with the following properties:
         - name			(string)
         - nationality	(string)
         - salary			(string)

	2 -  For all the functions : add the parameter types and return type

	3 -  Create 2 objects of type personn (like you want) and  test the 3 functions

*/


// =============
// Step 1: Create the Person type
type Person = {
  name: string;
  nationality: string;
  salary: string;
};

// Step 2: Add parameter types and return types to the functions
function getName(person: Person): string {
  return person.name;
}

function sumSalaries(person1: Person, person2: Person): string {
  return person1.salary + person2.salary;
}

function isFrench(person: Person): boolean {
  return person.nationality === "French";
}

// Step 3: Create objects of type Person and test the functions
const person1: Person = {
  name: "John Doe",
  nationality: "American",
  salary: "5000",
};

const person2: Person = {
  name: "Jane Smith",
  nationality: "French",
  salary: "6000",
};

console.log(getName(person1)); // Output: John Doe
console.log(sumSalaries(person1, person2)); // Output: 50006000
console.log(isFrench(person1)); // Output: false
console.log(isFrench(person2)); // Output: true
