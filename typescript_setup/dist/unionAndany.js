"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Union types: Union types are used when a value can be more than a single type.
//Example 1:
let subs = "1M";
//Example 2:
let apiRequest = 'pending';
apiRequest = 'pending';
//Example 3:
let airlineSeat = 'aisle';
airlineSeat = 'aisle';
// any means "turn off TypeScript checking".
//Example:
const orders = ['12', '20', '28', '42'];
let currentorder; //any
for (let order of orders) {
    if (order === "28") {
        currentorder = order;
        break;
    }
    currentorder = "11";
}
console.log(currentorder);
//Unkonown Type: The unknown type is similar to any, but safer because it forces you to perform some type of checking before performing most operations on values of type unknown.
//# sourceMappingURL=unionAndany.js.map