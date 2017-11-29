"use strict";
/**
 * Created by user on 2017. 11. 29..
 */
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
