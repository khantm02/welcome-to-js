'use strict';

let a = 'Ewin';
// let a = 'Tugba';
// let a = 'Jo';
// let a = 'Olesandra';

let b = 'Hello ' + a + ', your name is ';

if (a.length > 4) {
  b = b + 'long.';
} else if (a.length === 4) {
  b = b + 'perfect.';
} else {
  b = b + 'short.';
}

console.log(b);


let name1 = "Khant";
let greeting = "hello " + name1 + " your name is ";

if (name1.length > 4) {
    greeting += "long.";
}
else if (name1.length === 4) {
    greeting += "perfect.";
}
else if (name1.length < 4) {
    greeting += "short.";
}
