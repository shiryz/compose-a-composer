# Compose a Composer

@haydnba and myself (@shiryz) would like to challenge you to write a compose
function, we have collaborated to create a fun and easy way to introduce you to
this function and all its capabilities.

### What is function composition?

Function composition is chaining an arbitrary number of functions together to 
form a new and more exciting function. In order for the process to work, each 
of the discrete functions involved must accept and return consistent values (e.g. 
if a preceding function returns a JSON object then this must be what the 
succeeding function expects...). The idea is that, if done right, function 
composition can lead to readable code, e.g.:

```js
const getCryptoData = compose(writeToFile, apiRequest('https://blablah.com/api/v3/cryptocurrency-json'));

getCryptoData('bitcoin', updateHomePage);
```

In the example above we compose a request to an api and a write to the file system. 
On the execution of that composition we pass in an initial search term and a callback to execute on completion.


### Challenge 1: Build a composer

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

### Challenge 2: Have fun with examples

Try to call compose with your own functions, anything is valid as long as you
pass the right arguments.
Dream big!

### Challenge 3: Recursive compose

Replace the loop in your solution with a recursive call!
it doesn't have to be a call to compose, but it should be recursive
