import {shape} from './shape';

export class Circle extends shape {
    private radius : number;

    constructor(leftX:number, bottomY:number, radius:number){
        super(leftX, bottomY);
        this.radius = radius;
    }

    getWidth=():number => this.radius * 2;
    getHeight=():number => this.radius * 2;
    getArea=():number =>Math.PI * this.radius**2;
}
