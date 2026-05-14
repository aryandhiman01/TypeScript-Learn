let response: any = "42";

//Forcefully type assertion
let numericLength: number = (response as string).length

//example 1
type Book = {
    name: String
}

let bookString = '{"name": "Who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);

//example 2
const inputElement = document.getElementById("username") as HTMLInputElement

// any type
let value: any

value = "chai"
value = [1,2,3]
value = 2.5
value.toUpperCase()

// unknown type:
// unknown must be type-checked before use
// You can't access properties on an unknown type without type assertion
// You can't call or construct values of type unknown

let newValue: unknown

newValue = "chai"
newValue = [1,2,3]
newValue = 2.5
if(typeof newValue === "string") {
    newValue.toUpperCase();
}


//try-catch block

try{

} catch (error){
    if(error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}

//never type: The never type represents the type of values that never occur.
// here in the example there are two roles, so except these two roles no other role is will occur
type Role = "admin" | "user";

function redirectBasedonRole(role: Role): void {
    if(role === "admin") {
        console.log("Redirecting to admin dashboard");
    }
    if(role === "user") {
        console.log("Redirecting to user dashboard");
    }
}

//functions that return nothing are also of never type
function neverReturn(): never{
    while(true) {}
}