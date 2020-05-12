//* CONSTRUCTOR FUNCTION
// use strict ensures that this will not point to global object
'use strict';

const Circle = function () {
  this.draw = function () {
    console.log(this);
  };
};

const c = new Circle();
// Method call
c.draw();

const draw = c.draw;

// Function call
draw();

//!===============================================
//* CLASS
// Classes by default use strict
class Circle2 {
  draw() {
    console.log(this);
  }
}

const d = new Circle2();
const draw2 = d.draw;
draw2();
