


export class DomElement {
    private name: string;
    private parent?: DomElement;
    private children : DomElement[]=[];

    constructor(name: string){
        this.name = name;
    }

    public getName():string{
        return this.name;
    }
    public isRoot():boolean{
        return this.parent == undefined;
    }
    public addChild(...childElements:DomElement[]):void{
        for(let child of childElements){
            this.children.push(child);
        }
    }
    public setParent(parent:DomElement):void{
      this.parent = parent;
    }
}

