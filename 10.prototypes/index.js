function Circle(radius) {
  // instance members - properties and methods
  this.radius = radius;
}

// prototype members
Circle.prototype.draw = function () {
  console.log('draw');
};

const c1 = new Circle(1);
const c2 = new Circle(1);

//prototype methods can be overwritten
Circle.prototype.toString = function () {
  return `Circle with radius ${this.radius}`;
};

// returns all members (instance + prototype)
for (let key in c1) console.log(key);
