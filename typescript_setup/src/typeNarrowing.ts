//Type Guards: Type guards are used to narrow down the type of a variable within a conditional block. This allows you to perform operations on the variable that are specific to its narrowed type.

function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} chai...`
    }
    return `Chai oder: ${kind}`
}

function serveChai(msg?: string) {
    if(msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}

function orderChai(size: "small" | "medium" | "large" | number){
    if(size === "small"){
        return `Small Cutting chai...`
    }
    if(size === "medium" || size === "large"){
        return 'make extra chai'
    }

    return `Chai order #${size}`
} 

class kulhadChai {
    serve() {
        return `Serving Kulhad chai`
    }
}

class cutting {
    serve() {
        return `Serving Cutting chai`
    }
}

function serve(chai: kulhadChai | cutting){
    if(chai instanceof kulhadChai) {
        return chai.serve();
    }
}

type ChaiOrder = {
    type: string,
    sugar: number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj === "object" &&
        obj != null &&
        typeof obj.type === "string" &&
        typeof obj.type === "number"
    )
}

function serveOrder(item:ChaiOrder | string) {
    if(isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar}sugar`
    }
    return `Serving custom chai: ${item}`
}