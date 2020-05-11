const canEat = {
  eat: function () {
    this.hunger--;
    console.log('eating');
  },
};

const canWalk = {
  walk: function () {
    console.log('walking');
  },
};

const canSwim = {
  swim: function () {
    console.log('swims');
  },
};

function Person() {}
function Goldfish() {}

Object.assign(Person.prototype, canEat, canWalk);
Object.assign(Goldfish.prototype, canEat, canSwim);

const person = new Person();
const goldfish = new Goldfish();
console.log(person);
console.log(goldfish);
