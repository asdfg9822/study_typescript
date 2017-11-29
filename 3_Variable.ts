/**
 * Variable
 */

//Boolean 
let isDone: boolean = false;

//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String
let color: string = "blue";
color = 'red';

//Template String
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}`;

//Array
//Array에 Type지정 가능
let list: number[] = [1,2,3];
let list2: Array<number> = [1, 2, 3];

//Tuple : 배열에서 순서대로 타입을 지정할 수 있음
// Declare a tuple type
let x: [string, number, number];
// Initialize it
x = ["hello", 10, 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error, 순서 중요
//x[1].subStr //Error, Number라는 것을 인식하여 Validation 검증

// Enum
enum Color {Red, Green, Blue} //변환시 자동으로 숫자 할당
enum Color {Red = 1, Green = 2, Blue = 4}

// Any, 모든 타입을 다룰 때 사용
let list: any[] = [1, true, "free"];

list[1] = 100;