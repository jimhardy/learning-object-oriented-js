const _array = new WeakMap();

class Stack {
  constructor(array) {
    _array.set(this, []);
  }

  push(value) {
    // const array = _array.get(this);
    // array.push(value);
    // _array.set(this, array);
    //* solution method
    _array.get(this).push(value);
  }
  peek() {
    // const array = _array.get(this);
    // if (array.length > 0) {
    //   console.log(array[array.length - 1]);
    // } else {
    //   throw new Error('nothing in stack');
    // }
    // return array;
    //* solution method
    const array = _array.get(this);
    if (items.length === 0) {
      throw new Error('stack is empty');
    }
    return array[array.length - 1];
  }
  pop() {
    // const array = this.peek();
    // array.pop();
    // _array.set(this, array);
    //* solution method
    const array = _array.get(this);
    if (array.length === 0) {
      throw new Error('stack is empty');
    }
    return items.pop();
  }

  get count() {
    return _array.get(this).length;
  }
}

const s = new Stack();
