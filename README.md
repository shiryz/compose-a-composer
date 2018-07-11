# Compose a Composer

@haydnba and myself (@shiryz) would like to challenge you to write a compose
function, we have collaborated to create a fun and easy way to introduce you to
this function and all its capabilities.

### Challenge 1: Build a composer

Copy and paste the code below into `repl.it` or an editor you like to work with,
you need to write the `compose`'s function code.
Don't change any of the example code, only change compose itself

```js
function compose() {
  // Change Me!
}

var funs1 = compose(Math.round, Math.abs); // Conposing a function that executes Math.round(Math,abs(arg));
funs1(-87.456); // calling the function with the argument -87.456
// -------------------------

// power takes a number x and returns x^2
var power2 = function(x) {
  return Math.pow(x, 2);
};

var funs2 = compose(power2, Math.abs); // Composition of power2(Math.abs(arg));
funs2(-2);
// -------------------------

var concatGreat = function(str) {
  return str.concat(" is Great!");
};

var splitSpaces = function(str) {
  return str.split(" ");
};

var addStars = function(arr) {
  return arr
    .map(function(element) {
      return element + "*";
    })
    .join(" ");
};

var funs3 = compose(addStars, splitSpaces, concatGreat); // Composition of addStars(splitSpaces(concatGreat(arg)));
funs3("Hummus");
```

### Challenge 2: Have fun with examples

Try to call compose with your own functions, anything is valid as long as you
pass the right arguments.
Dream big!

### Challenge 3: Recursive compose

Replace the loop in your solution with a recursive call!
it doesn't have to be a call to compose, but it should be recursive
