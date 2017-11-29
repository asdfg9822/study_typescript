"use strict";
/**
 * Variable Declarations (var 생략)
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/**
  * let
  * - 블락 스코핑
  * - 재정의 불가능
  * -
  */
function f(input) {
    var a = 100;
    if (input) {
        // Still okay to reference 'a'
        var b_1 = a + 1;
        return b_1;
    }
    // Error: 'b' doesn't exist here
    return b;
}
var x = 10;
var x = 20; // error: can't re-declare 'x' in the same scope
/**
 * const, constant variable
 */
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
};
// Error, 값(여기서는 객체의 레퍼런스 값이 변함)이 바뀌지 않는다.
kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};
// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
    return getCity();
}
/**
 * Destructuring
 */
//Array destructuring
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first); // outputs 1
console.log(second); // outputs 
_a = [first, second], second = _a[0], first = _a[1]; //이 경우 값 바뀜 
var _b = [1, 2, 3, 4], first = _b[0], rest = _b.slice(1);
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
var _c = [1, 2, 3, 4], second = _c[1], fourth = _c[3];
//Object destructuring
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, b = o.b; //({ a, b } = { a: "baz", b: 101 });
var a = o.a, passthrough = __rest(o, ["a"]);
var total = passthrough.b + passthrough.c.length;
//Property renaming
var newName1 = o.a, newName2 = o.b; //let newName1 = o.a;, let newName2 = o.b;
//Type 
var a = o.a, b = o.b;
//Default values
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a; //Default값 지정 가능
}
keepWholeObject({ a: "1" });
function f(_a) {
    var a = _a.a, b = _a.b;
    // ...
}
//Default Value
function f(_a) {
    var _b = _a === void 0 ? { a: "", b: 0 } : _a, a = _b.a, b = _b.b;
    // ...
}
f(); // ok, default to { a: "", b: 0 }
//주의
function f(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    // ...
}
f({ a: "yes" }); // ok, default b = 0
f(); // ok, default to { a: "" }, which then defaults b = 0
f({}); // error, 'a' is required if you supply an argument
/**
 * Spread, Destructuring과 반대
 * Object나 Array에 있는 것을 펼칠 수 있다
 */
var first = [1, 2];
var second = [3, 4];
var bothPlus = [0].concat(first, second, [5]); //[0, 1, 2, 3, 4, 5]
//from right to left ! 오른쪽에서부터 덮어 쓴다
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign({}, defaults, { food: "rich" }); //{ food: "rich", price: "$$", ambiance: "noisy" }
//food: "spicy"
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign({ food: "rich" }, defaults);
//메소드는 Spread대상에 포함하지 않는다
var C = /** @class */ (function () {
    function C() {
        this.p = 12;
    }
    C.prototype.m = function () {
    };
    return C;
}());
var c = new C();
var clone = __assign({}, c);
clone.p; // ok
clone.m(); // error!
var _a;
