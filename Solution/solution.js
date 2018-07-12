function compose() {
  var args = arguments;
  return function(result) {
    for (var i = args.length - 1; i >= 0; i--) {
      result = args[i](result);
    }
    return result;
  };
}


// Alternative solution for Mario... using forEach()
// function compose () {
//   var fns = Array.from(arguments).reverse();
//   return function(value) {
//     fns.forEach(function(fn) {
//       value = fn(value);
//     })
//     return value;
//   };
// };

// ES6 with reduce
// const compose = (...fns) => input => fns.reduce((acc, fn) => fn(acc), input);
