class Circle {
  constructor(radius) {
    this.radius = radius;
    // methods defined in constructor appear in object instance
    this.move = function () {
      console.log('move');
    };
  }
  // methods defined here appear in prototype
  draw() {
    console.log('draw');
  }
}

const c = new Circle(1);
