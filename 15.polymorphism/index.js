function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  console.log('circle duplicate');
};

function Square() {}

extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log('square duplicate');
};

const c = new Circle();

const shapes = [new Circle(), new Square()];

for (let shape of shapes) {
  shape.duplicate();
}
