/**
 * Created by user on 2017. 11. 29..
 */

/**
 * interface
 */
//interface는 트랜스파일러에 의해 ES5 컴파일 될 경우 사라지는 것으로 보임
//Type 및 Attribute 이름을 검증 후 컴파일 Error를 뱉어내고 끝이 난다
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);