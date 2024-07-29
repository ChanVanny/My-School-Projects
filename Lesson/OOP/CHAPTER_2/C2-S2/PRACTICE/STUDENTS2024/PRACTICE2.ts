class webAlumini{
    expInVueJs: number;
    expInNodeJs: number;
    canCodeOOP: boolean;

    constructor(expInVueJs:number, expInNodeJs:number, canCodeOOP: boolean){
        this.expInVueJs = expInVueJs;
        this.expInNodeJs = expInNodeJs;
        this.canCodeOOP = canCodeOOP;
    }

    getSalay(): number {
        let salary = 0;
        if (this.expInVueJs < 1 && this.expInNodeJs < 1 && (this.canCodeOOP==false)) {
          salary = 250;
        }
        else if(this.expInVueJs > 1 && this.expInNodeJs < 1 && (this.canCodeOOP==false)){
            salary = 350;
        }
        else if(this.expInVueJs > 1 && this.expInNodeJs > 1 && (this.canCodeOOP==false)){
            salary = 450;
        }
        else{
            salary = 700;
        }
        return salary;
    }
}

let Van = new webAlumini(0.5, 0.5, false);
let Dy = new webAlumini(2, 0.5, false);
let Rin = new webAlumini(2, 2, false);
let Thou = new webAlumini(2, 2, true);

console.log(Van.getSalay());
console.log(Dy.getSalay());
console.log(Rin.getSalay());
console.log(Thou.getSalay());
