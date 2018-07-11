# Compose a Composer

@haydnba and myself (@shiryz) would like to challenge you to write a compose
function, we have collaborated to create a fun and easy way to introduce you to
this function and all its capabilities.

### Challenge 1: Build a composer

Copy and paste the code below into `repl.it` or an editor you like to work with,
you need to write the `compose`'s function code.
Don't change any of the example code, only change compose itself

```js
/* 
  Input: Lots of functions (fn1, fn2, fn3...) 
  Output: a function which is a composition of the input fn1(fn2(fn3(...)))
*/
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

var funs3 = compose(addStars, splitSpaces, concatGreat); // Composition of addStars(splitSpaces(concatGreat(arg)));
funs3("Hummus");
```
__Hints__

Try to struggle with this for a while by yourself before resulting to these hints:
- Check the [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object which gets passed to every function, how can you use it to compose all the functions together?
- Now that you're using `arguments`, remember that you can't use a `forEach` to iterate over these functions but you can use the old-fashioned `for` loop or turn the object into an array.
- Think about the direction of the for loop.
- Remember to return a function from `compose, funs1, funs2 and funs3` all need to be functions.

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
