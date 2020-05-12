// Symbol() creates a unique identifier
const _radius = Symbol();
const _draw = Symbol();
class Circle {
  constructor(radius) {
    // this.radius = radius;
    // Symbol can be used to implement *kind of* private properties
    this[_radius] = radius;
  }
  // computed property name
  [_draw]() {}
}

const c = new Circle(1);
console.log(c.radus);
