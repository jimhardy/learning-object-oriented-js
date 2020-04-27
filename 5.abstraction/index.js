//* Abstraction: hide the details, expose essentials
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  let computeOptimumLocation = function (factor) {
    console.log('optimise');
  };

  this.draw = function () {
    let x, y;
    console.log('draw');
    computeOptimumLocation(0.1);
  };
}
const circle = new Circle(1);

circle.draw();
