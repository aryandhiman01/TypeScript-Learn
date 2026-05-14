"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "42";
//Forcefully type assertion
let numericLength = response.length;
let bookString = '{"name": "Who moved my cheese"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
//example 2
const inputElement = document.getElementById("username");
// any type
let value;
value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();
// unknown type:
// unknown must be type-checked before use
// You can't access properties on an unknown type without type assertion
// You can't call or construct values of type unknown
let newValue;
newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;
if (typeof newValue === "string") {
    newValue.toUpperCase();
}
//try-catch block
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}
function redirectBasedonRole(role) {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard");
    }
    if (role === "user") {
        console.log("Redirecting to user dashboard");
    }
}
//functions that return nothing are also of never type
function neverReturn() {
    while (true) { }
}
//# sourceMappingURL=moreTypes.js.map