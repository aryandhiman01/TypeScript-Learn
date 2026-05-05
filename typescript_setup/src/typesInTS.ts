//TypeScript enhances JavaScript by adding static types.
//Type Annotations and Inference
// TypeScript offers two ways to work with types:

// Explicit Typing: You explicitly declare the type of a variable
// Type Inference: TypeScript automatically determines the type based on the assigned value

//Type Inference:
let drink = "chai";
let cups = Math.random() > 0.5 ? 10:5;

//Explixit Type Annotation: Explicit typing means you tell TypeScript exactly what type a variable should be
let chaiFlaovour: String = "masala chai"  //string
chaiFlaovour = "Ginger Tea"

let chaiOrder:number   //number

let isActive: boolean = true;
let hasPermission = false;     //boolean
