function composeAux(args, idx, result, callback) {
  if (idx < 0) callback(result);
  args[idx](result, function (nextResult) {
    return composeAux(args, idx - 1, nextResult, callback);
  });
}

function compose() {
  var args = arguments;
  return function (input, callback) {
    composeAux(args, args.length - 1, input, callback);
  };
}