import { Shape } from "./shape";

export class Rectangle extends shape {
  private rightX: number;
  private topY: number;

  constructor(leftX: number,rightX: number, bottomY: number, topY: number) {
    super(leftX, bottomY);
    this.rightX = rightX;
    this.topY = topY;
  }

  getWidth = (): number => this.rightX - this.leftX;
  getHeight = (): number => this.topY - this.bottomY;
  getArea = (): number => (this.getHeight()) * (this.getWidth());

}