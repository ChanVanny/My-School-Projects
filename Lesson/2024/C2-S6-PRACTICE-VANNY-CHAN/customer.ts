export class Customer{
    firstName: string;
    LastName: string;


    constructor(firstName:string, LastName:string){
        this.firstName = firstName,
        this.LastName = LastName
    }

    // Get FirstName
    getFirstName():string{
        return this.firstName;
    }

    // Get LastName
    getLastName():string{
        return this.LastName;
    }
}