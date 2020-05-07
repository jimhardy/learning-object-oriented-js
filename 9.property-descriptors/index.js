let person = { name: 'James' };
Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: true,
  configurable: false,
});
