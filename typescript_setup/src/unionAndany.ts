//Union types: Union types are used when a value can be more than a single type.
//Example 1:
let subs: number | string = "1M"

//Example 2:
let apiRequest:'pending' | 'success' | 'error' = 'pending'
apiRequest = 'pending'

//Example 3:
let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle'
airlineSeat = 'aisle'


// any means "turn off TypeScript checking".
//Example:
const orders = ['12', '20', '28', '42']

let currentorder: string | undefined;    //any
 
for(let order of orders) {
    if(order === "28"){
        currentorder = order;
        break;
    }
    currentorder = "11";
}
console.log(currentorder);