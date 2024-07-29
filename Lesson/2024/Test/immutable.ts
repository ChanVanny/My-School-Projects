
class Point{
    constructor(private x:number, private y: number){}

        public translateX(deltax :number): Point {
            return new Point(this.x + deltax, this.y);
        }

        public clone():Point {
            return new Point(this.x, this.y);
        }
}

let p1 = new Point(10,20);
let p2 = p1.clone();
let p3 = p1.translateX(50);

console.log(p1);
console.log(p2);
console.log(p3);
