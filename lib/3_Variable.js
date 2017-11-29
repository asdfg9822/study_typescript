"use strict";
/**
 * Variable 관련
 */
/**
 * Boolean
 */
var isDone = false;
/**
 * Number
 */
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
/**
 * String
 */
var color = "blue";
color = 'red';
/**
 * Template String
 */
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName;
/**
 * Array
 */
//Array에 Type지정 가능
var list = [1, 2, 3];
var list2 = [1, 2, 3];
/**
 * Tuple : 배열에서 순서대로 타입을 지정할 수 있음
 */
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10, 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error, 순서 중요
//x[1].subStr //Error, Number라는 것을 인식하여 Validation 검증
/**
 *  Enum
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); //변환시 자동으로 숫자 할당
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
/**
 *  Any, 모든 타입을 다룰 때 사용
 */
var list = [1, true, "free"];
list[1] = 100;
/**
 *  Void, Any와 반대. 변수보단 함수 반환값을 지정할 때 사용하면 유용
 */
function warnUser() {
    alert("This is my warning message");
}
var unusable = undefined;
/**
 *  Null and Undefined
 */
// Not much else we can assign to these variables!
var u = undefined;
var n = null;
/**
 *  Never, 절대 발생하지 않는 타입에 지정
 */
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
/**
 * Type assertions
 * Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.
 */
var someValue = "this is a string";
var strLength = someValue.length;
