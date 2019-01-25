
let array = [1, 2, 3];

// Works
array.map(d => console.log(d));

// Doesn't work as expected, but with confusing error message.
// Perhaps "Cannot use 'default' keyword in argument expression"?
array.map(default => console.log(default));
// Error message:
// Argument expression expected
// Argument of type 'void' is not assignable to parameter of type '(value: number, index: number, array: number[]) => {}'

