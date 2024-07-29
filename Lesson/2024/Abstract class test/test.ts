
abstract class Animal {
    constructor(protected name: string) {   
    }
    abstract playSound(): void;
}

class cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    // playSound():{
    //     console.log("meoow");
        
    // }
}