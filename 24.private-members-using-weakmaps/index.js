// weakmap is essentially a dictonary where keys are objects and values can be anything
const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
    // arrow functions use the 'this' value of their containing function
    _move.set(this, () => {
      console.log('move', this);
    });
  }
  draw() {
    console.log(_radius.get(this));
    _move.get(this)();
    console.log('draw');
  }
}

const c = new Circle(1);
