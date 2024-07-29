enum Gender{
    MALE = "male",
    FAMALE = "famale"
}

enum Major{
    WEP = "WEB Development",
    SNA = "System Networking Adminstration"
}

enum Topic{
    JAVASCRIPT = "Javascript",
    PHP = "php",
    HTML = "html",
    TS = "TypeScript",
    VUE = "VUE Js"
}

class Student{
    private result : Result[]=[];

    constructor(private name:string, private gender:Gender, private major: Major){
    }

    addScore(score:number, topic:Topic):void{
        this.result.push(new Result(score, topic));
    }

    get AverageOfStudent():number{
        let totalScore : number = 0;
        this.result.forEach(result=>{
            totalScore += result.getScore;
        })
        return totalScore / this.result.length;
    }
}

class Result {
    constructor(private score: number, private topic: Topic){};

    get getScore():number{
        return this.score;
    }
}

let Thoe : Student = new Student("Thoe", Gender.MALE, Major.WEP);
let Vanny : Student = new Student("Vanny", Gender.MALE, Major.WEP);

Thoe.addScore(100, Topic.JAVASCRIPT);
Thoe.addScore(90, Topic.PHP);
Vanny.addScore(40, Topic.VUE);

console.log(Thoe);
console.log(Thoe.AverageOfStudent);