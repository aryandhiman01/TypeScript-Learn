//Typescript = TypeScript is a strongly typed, open-source programming language developed by Microsoft that builds on top of JavaScript
//It adds static typing and other features to JavaScript, making it easier to write and maintain large-scale applications

//Difference b/w javascript and typescript
//JavaScript
// function greet(name) {
//     return "Hello " + name;
// }

// console.log(greet("Aryan"));

//TypeScript
function greet(name: String): String {   //here datatypes are defined in the typescript
    return `Hello ${name}`;
}

console.log(greet("Aryan"));