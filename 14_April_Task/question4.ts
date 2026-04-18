//Implement interfaces in classes

interface Shape {
  area(): number;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

let circle = new Circle(5);
let rectangle = new Rectangle(4, 6);

console.log("Area of Circle:", circle.area());
console.log("Area of Rectangle:", rectangle.area());
