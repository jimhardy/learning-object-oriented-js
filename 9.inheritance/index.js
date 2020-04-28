//* Class
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  draw() {
    console.log(`draw with radius ${this.radius}`);
  }
}
const circle = new Circle(5);
circle.draw();

//* Constructor Function
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   };
// }
// const another = new Circle(1);
// another.draw();

//* Factory Function
// function createCirlce(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log('draw');
//     },
//   };
// }
// const circle = createCirlce(1);

//* Object Literal
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log('draw');
//   },
// };
