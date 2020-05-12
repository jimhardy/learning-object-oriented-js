// weakmap is essentially a dictonary where keys are objects and values can be anything
const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  get radius() {
    return _radius.get(this);
  }
  set radius(value) {
    if (value <= 0) throw new Error('invaid radius');
    _radius.set(this, value);
  }
}

const c = new Circle(1);
