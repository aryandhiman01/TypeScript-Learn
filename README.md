# TypeScript Learning Guide

## Table of Contents
1. [What is TypeScript?](#what-is-typescript)
2. [TypeScript vs JavaScript](#typescript-vs-javascript)
3. [TypeScript Execution Journey](#typescript-execution-journey)
4. [Type System Basics](#type-system-basics)
5. [Union Types](#union-types)
6. [Any Type](#any-type)

---

## What is TypeScript?

TypeScript is a **strongly typed, open-source programming language** developed by Microsoft that builds on top of JavaScript. It adds static typing and other features to JavaScript, making it easier to write and maintain large-scale applications.

### Key Benefits:
- Static type checking at compile time
- Better IDE support and code completion
- Easier refactoring and maintenance
- Catches errors before runtime

---

## TypeScript vs JavaScript

### JavaScript Example:
```javascript
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Aryan"));
```

### TypeScript Example:
```typescript
function greet(name: String): String {
    return `Hello ${name}`;
}

console.log(greet("Aryan"));
```

**Key Differences:**
- TypeScript requires explicit type definitions
- TypeScript uses arrow functions and template literals
- TypeScript provides compile-time type safety
- TypeScript improves code readability and maintainability

---

## TypeScript Execution Journey

The TypeScript compilation process follows several stages:

```
TS Code → Lexer → Parser → Binder → Checker → Emitter → .js, d.ts, .map
```

### Stage Breakdown:

### 1. **Lexer (Lexical Analysis)**
- Breaks the source code into tokens (smallest units of meaning)
- Example: `let x = 5;` becomes tokens: `let`, `x`, `=`, `5`, `;`
- Validates syntax at the character level

### 2. **Parser (Syntax Analysis)**
- Takes tokens from the lexer
- Builds an **Abstract Syntax Tree (AST)** - hierarchical representation of code structure
- Validates syntax at the statement level
- Creates the structural blueprint of your program

### 3. **Binder (Symbol Binding)**
- Resolves names and symbols (variables, functions, types)
- Creates a **symbol table** mapping names to declarations
- Establishes relationships between identifiers
- Prepares data for type checking

### 4. **Checker (Type Checking)**
- Performs **type checking** on the code
- Ensures type consistency:
  - Variable types match declarations
  - Function parameters match usage
  - Return values match function signatures
- Checks for semantic errors:
  - Unreachable code
  - Incorrect language feature usage
  - Type mismatches

### 5. **Emitter (Code Generation)**
- Generates output files based on AST and previous stages
- Output includes:
  - **JavaScript files (.js)** - Runnable code
  - **Declaration files (.d.ts)** - Type information for consumers
  - **Source map files (.map)** - Debugging information linking back to TS source

---

## Type System Basics

### Type Annotations and Inference

TypeScript offers two ways to work with types:

#### 1. **Type Inference**
TypeScript automatically determines the type based on the assigned value:

```typescript
let drink = "chai";           // Inferred as string
let cups = Math.random() > 0.5 ? 10 : 5;  // Inferred as number
```

#### 2. **Explicit Type Annotation**
You explicitly declare the type of a variable:

```typescript
let chaiFlavour: String = "masala chai";  // Explicit string type
chaiFlavour = "Ginger Tea";               // Valid assignment

let chaiOrder: number;                    // Explicit number type

let isActive: boolean = true;             // Explicit boolean type
let hasPermission = false;                // Inferred as boolean
```

### Basic Types Supported:

| Type | Example | Description |
|------|---------|-------------|
| `string` | `"hello"` | Text values |
| `number` | `42`, `3.14` | Numeric values |
| `boolean` | `true`, `false` | True/false values |
| `undefined` | `undefined` | Variable with no value |
| `null` | `null` | Intentional absence of value |

---

## Union Types

Union types allow a variable to hold values of **more than one type**. Use the `|` (pipe) operator to combine types.

### Example 1: String or Number
```typescript
let subs: number | string = "1M";
subs = 1000000;  // Also valid
```

### Example 2: Specific String Values (Literal Types)
```typescript
let apiRequest: 'pending' | 'success' | 'error' = 'pending';
apiRequest = 'success';  // Valid
// apiRequest = 'loading';  // Error - not in union
```

### Example 3: Airline Seat Selection
```typescript
let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle';
airlineSeat = 'window';  // Valid
```

### Example 4: String with Undefined
```typescript
let currentOrder: string | undefined;

const orders = ['12', '20', '28', '42'];

for (let order of orders) {
    if (order === "28") {
        currentOrder = order;
        break;
    }
    currentOrder = "11";
}

console.log(currentOrder);  // Output: "28"
```

---

## Any Type

The `any` type is a way to **turn off TypeScript checking** for a variable. Use it sparingly as it defeats the purpose of using TypeScript.

### When to Use `any`:
- Migrating from JavaScript
- Working with third-party libraries without type definitions
- Handling dynamic data where types are truly unknown
- Quick prototyping

### Important Note:
Overusing `any` defeats the purpose of using TypeScript. Prefer more specific types whenever possible.

---

## Project Structure

```
Typescript/
├── Basics_of_TS/
│   ├── basic.ts              # Basic TypeScript and JS comparison
│   └── lecture2.ts           # TypeScript execution journey
└── typescript_setup/
    ├── package.json
    ├── tsconfig.json
    └── src/
        ├── index.ts          # Basic greeting function
        ├── typesInTS.ts      # Type annotations and inference
        └── unionAndany.ts    # Union types and any type
```

---

## Key Takeaways

✅ TypeScript adds static typing to JavaScript
✅ The compilation process transforms TS to JS through 5 stages
✅ Type annotations improve code clarity and catch errors early
✅ Explicit typing is better than relying on inference
✅ Union types allow flexible type definitions
✅ Avoid using `any` - be specific with types
✅ TypeScript improves developer experience and code maintainability

---

## Next Steps to Learn

- Interfaces and Type Aliases
- Classes and Objects
- Generics
- Enums
- Decorators
- Advanced Type Operators (keyof, typeof, conditional types)
- Function Overloading
- Utility Types (Partial, Required, Record, etc.)

---

**Happy Learning! 🚀**