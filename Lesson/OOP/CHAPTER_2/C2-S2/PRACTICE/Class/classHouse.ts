class House{
    numberDoor: number;
    owner: string;

    trees:Tree[] = [];
    constructor(numberDoor: number, owner: string){
        this.numberDoor = numberDoor;
        this.owner = owner;
    }

    setTree(tree:Tree){
        this.trees.push(tree);
    }
}

class Tree{
    size:number;
    constructor(size:number){
        this.size;
    }
}

let tree1 = new Tree(10);
let tree2 = new Tree(20);

console.log(tree1);
console.log(tree2);

