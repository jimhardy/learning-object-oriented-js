class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    //if there is a constructor in both child and parent, then use super()
    super(color);
    this.radius = radius;
  }
  draw() {
    console.log('draw');
  }
}

const c = new Circle('red', 1);
