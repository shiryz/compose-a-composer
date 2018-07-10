# Compose a Composer

Copy and paste the code below into `repl.it` or an editor you like to work with,
you need to write the `compose`'s function code.
Don't change any of the example code, only change compose itself

```js
function compose() {
  // Change Me!
}

var funs1 = compose(Math.round, Math.abs);
funs1(-87.456);
// -------------------------
var power = function(x) {
  return Math.pow(x, 2);
};

var funs2 = compose(power, Math.abs);
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

var funs3 = compose(addStars, splitSpaces, concatGreat);
funs3("Hummus");
```
