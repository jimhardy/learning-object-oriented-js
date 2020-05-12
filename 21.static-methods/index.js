class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  // Instance Method - specific to specific object
  draw() {}

  // Static Method - available on class, not just instance
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const circle = Circle.parse('{ "radius": 1 }');
console.log(circle);
