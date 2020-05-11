//* Abstraction: hide the details, expose essentials
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log('draw', defaultLocation);
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error('invalid location');
      }
      defaultLocation = value;
    },
  });
}
const circle = new Circle(1);

circle.defaultLocation = { x: 1, y: 2 };
circle.draw();
