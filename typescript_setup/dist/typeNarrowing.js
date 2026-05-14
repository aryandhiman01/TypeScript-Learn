"use strict";
//Type Guards: Type guards are used to narrow down the type of a variable within a conditional block. This allows you to perform operations on the variable that are specific to its narrowed type.
Object.defineProperty(exports, "__esModule", { value: true });
//typeof Type Guards : The typeof operator is a built-in type guard that checks the type of a primitive value at runtime.
//instanceof Type Guards : The instanceof operator checks if an object is an instance of a specific class or constructor function.
function getChai(kind) {
    if (typeof kind === 'string') {
        return `Making ${kind} chai...`;
    }
    return `Chai oder: ${kind}`;
}
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}
function orderChai(size) {
    if (size === "small") {
        return `Small Cutting chai...`;
    }
    if (size === "medium" || size === "large") {
        return 'make extra chai';
    }
    return `Chai order #${size}`;
}
class kulhadChai {
    serve() {
        return `Serving Kulhad chai`;
    }
}
class cutting {
    serve() {
        return `Serving Cutting chai`;
    }
}
function serve(chai) {
    if (chai instanceof kulhadChai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj != null &&
        typeof obj.type === "string" &&
        typeof obj.type === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar}sugar`;
    }
    return `Serving custom chai: ${item}`;
}
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return `Masala Chai`;
            break;
        case "elaichi":
            return `Elaichi Chai`;
            break;
        case "ginger":
            return `Ginger Chai`;
            break;
    }
}
function brew(order) {
    if ("spicelevel" in order) {
        //
    }
}
// Unknown type : In TypeScript, unknown is a safer version of any. Value can be anything, but you must check its type before using it.
function isStringArray(arr) {
    return Array.isArray(arr) && arr.every(item => typeof item === "string");
}
//# sourceMappingURL=typeNarrowing.js.map