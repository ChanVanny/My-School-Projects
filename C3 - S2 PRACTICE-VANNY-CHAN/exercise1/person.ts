

export class person{
    private name: string;
    private yearOfBirth?: number;

    constructor(name: string){
        this.name = name;
    }

    public getName(){
        return this.name;
    }

    public getyearOfBirth():number{
        return Number(this.yearOfBirth);
    }

    public setyear(yearOfBirth: number){
        this.yearOfBirth = yearOfBirth;
    }
}