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

var funs1 = compose(
  Math.round,
  Math.abs
);
funs1(-87.456);
// -------------------------
var power = function(x) {
  return Math.pow(x, 2);
};

var funs2 = compose(
  power,
  Math.abs
);
funs2(-2);
// -------------------------
var concatGreat = function(str) {
  return str.concat(' is Great!');
};

var splitSpaces = function(str) {
  return str.split(' ');
};

var addStars = function(arr) {
  return arr
    .map(function(element) {
      return element + '*';
    })
    .join(' ');
};

var funs3 = compose(
  addStars,
  splitSpaces,
  concatGreat
);
funs3('Hummus');
```

### Challenge 2: Have fun with examples

Try to call compose with your own functions, anything is valid as long as you
pass the right arguments.
Dream big!

### Challenge 3: Recursive compose

Replace the loop in your solution with a recursive call!
it doesn't have to be a call to compose, but it should be recursive

### Challenge 4: Async compose

If you have implemented function composition using recursion, you might have
the feeling that this would be possible with callbacks - try to refactor the
recursive solution so that it can handle asynchrony. The following code borrows
a lot from the **LEGENDARY** ![waterfall function morning challenge](https://github.com/foundersandcoders/mc-waterfall-chaser#morning-challenge-implement-a-waterfall-function)
brought to us by Eoin McCarthy and Besart Hoxhaj!

```js
function asyncCompose() {
  // Change Me!!
}

// These are the functions we will pass into our composor
function asyncAddOne(x, callBack) {
  setTimeout(function() {
    callBack(x + 1);
  }, 1000);
}

function asyncDouble(x, callBack) {
  setTimeout(function() {
    callBack(x * 2);
  }, 1000);
}

function asyncTimesTen(x, callBack) {
  setTimeout(function() {
    callBack(x * 10);
  }, 1000);
}

var isItAWaterfall = asyncCompose(asyncTimesTen, asyncDouble, asyncAddOne);

isItAWaterfall(3, function(result) {
  setTimeout(function() {
    if (result !== 80) {
      console.log('test failed, expected 80 but got', result);
    } else {
      console.log('passed with result of: ', result);
    }
  }, 1000);
});
```
