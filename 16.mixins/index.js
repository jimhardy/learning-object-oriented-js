function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

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

mixin(Person.prototype, canEat, canWalk);
mixin(Goldfish.prototype, canEat, canSwim);

const person = new Person();
const goldfish = new Goldfish();
console.log(person);
console.log(goldfish);
