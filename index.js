// Strict equality (===) (Both values have same value and type)
// Loose Equality (==) (Both values need not have the same type but will check if values are equal)


// Ternary Operator
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

// Logical AND (&&)
// Logical OR (||)
// Logical NOT (!)

// When using logical operators on non boolean we deal with Truthy and Falsy Values
// ---------Falsy Values--------------
// undefined
// null
// 0
// ''
// NaN (Not a number)
// ----------Truthy Values-------------
// Anything that is not Falsy

let Usercolor = '';
let defaultcolor = 'blue';
let currentcolor = Usercolor || defaultcolor;
console.log(currentcolor);

// for loop

for (let i = 0; i < 5; i++) {
    console.log("Hello World")
}