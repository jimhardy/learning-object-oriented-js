class Shape {
  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  // js will use this method instead of the parent one
  // because it is the first match it finds whilst stepping up the ladder
  move() {
    //super calls method from parent class
    super.move();
    console.log('circle move');
  }
}

const c = new Circle();
