"use strict";
/**
 * Variable
 */
//Boolean 
var isDone = false;
//Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//String
var color = "blue";
color = 'red';
//Template String
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName;
//Array
//Array에 Type지정 가능
var list = [1, 2, 3];
var list2 = [1, 2, 3];
//Tuple : 배열에서 순서대로 타입을 지정할 수 있음
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10, 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error, 순서 중요
//x[1].subStr //Error, Number라는 것을 인식하여 Validation 검증
// Enum
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
// Any, 모든 타입을 다룰 때 사용
var list = [1, true, "free"];
list[1] = 100;
