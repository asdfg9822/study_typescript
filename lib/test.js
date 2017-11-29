"use strict";
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first); // outputs 1
console.log(second); // outputs 2
first = input[0];
second = input[1];
// swap variables
_a = [second, first], first = _a[0], second = _a[1];
console.log(first, second);
var _a;
