/**
 * Variable Declarations (var 생략)
 */

/**
  * let
  * - 블락 스코핑
  * - 재정의 불가능
  * - 
  */
function f(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    return b;
}

let x = 10;
let x = 20; // error: can't re-declare 'x' in the same scope

 /**
  * const, constant variable
  */
  const numLivesForCat = 9;
  const kitty = {
      name: "Aurora",
      numLives: numLivesForCat,
  }
  
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
    let getCity;

    if (true) {
        let city = "Seattle";
        getCity = function() {
            return city;
        }
    }

    return getCity();
}

/**
 * Destructuring
 */

 //Array destructuring
 let input = [1, 2];
 let [first, second] = input;
 console.log(first); // outputs 1
 console.log(second); // outputs 
 
 [second, first] = [first, second] //이 경우 값 바뀜 

 let [first, ...rest] = [1, 2, 3, 4];
 console.log(first); // outputs 1
 console.log(rest); // outputs [ 2, 3, 4 ]

 let [, second, , fourth] = [1, 2, 3, 4];

 //Object destructuring
 let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o; //({ a, b } = { a: "baz", b: 101 });

let { a, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;

//Property renaming
let { a: newName1, b: newName2 } = o; //let newName1 = o.a;, let newName2 = o.b;

//Type 
let { a, b }: { a: string, b: number } = o;

//Default values
function keepWholeObject(wholeObject: { a: string, b?: number }) { // ?를 붙이면 값이 없어도 괜찮은듯
    let { a, b = 1001 } = wholeObject; //Default값 지정 가능
}

keepWholeObject({a:"1"});

/**
 * Function declarations
 */

//Type Declaration
type C = { a: string, b?: number }
function f({ a, b }: C): void {
    // ...
}

//Default Value
function f({ a, b } = { a: "", b: 0 }): void {
    // ...
}
f(); // ok, default to { a: "", b: 0 }

//주의
function f({ a, b = 0 } = { a: "" }): void {
    // ...
}
f({ a: "yes" }); // ok, default b = 0
f(); // ok, default to { a: "" }, which then defaults b = 0
f({}); // error, 'a' is required if you supply an argument

/**
 * Spread, Destructuring과 반대
 * Object나 Array에 있는 것을 펼칠 수 있다
 */


let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5]; //[0, 1, 2, 3, 4, 5]

//from right to left ! 오른쪽에서부터 덮어 쓴다
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" }; //{ food: "rich", price: "$$", ambiance: "noisy" }

//food: "spicy"
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { food: "rich", ...defaults };

//메소드는 Spread대상에 포함하지 않는다
class C {
    p = 12;
    m() {
    }
  }
  let c = new C();
  let clone = { ...c };
  clone.p; // ok
  clone.m(); // error!