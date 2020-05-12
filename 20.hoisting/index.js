// Function Declaration - hoisted => raised to top, so can be called anywhere
function sayHello() {}

// Function Expression => can only be used after declaration
const sayGoodbye = function () {};

//!========================================

// Class Declaration - not hoisted
class Circle {}

// Class Expression - rarely used
const Square = class {};
