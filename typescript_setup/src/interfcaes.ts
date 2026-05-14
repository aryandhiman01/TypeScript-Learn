// TypeScript allows types to be defined separately from the variables that use them.
// Aliases and Interfaces allows types to be easily shared between different variables/objects.

type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};

function makeChai(order: ChaiOrder) {
    console.log(order);
}

function serveChai(order: ChaiOrder) {
    console.log(order);
}


// type TeaRecipe = {
//     water: number;
//     milk: number
// }

// class MasalaChai implements TeaRecipe {
//     water = 100;
//     milk = 50;
// }

// Interfaces: Interfaces are similar to type aliases, except they only apply to object types.
interface CupSize {
    size: "small" | "large"
}
class Chai implements CupSize {
    size: "small" | "large" = "large";
}


// type Response = { ok: true} | { ok: false}
// class myRes implements Response{
//     ok: boolean = true;
// }

