function composeAux(args, idx, result) {
  if (idx < 0) {
    return result;
  }
  return composeAux(args, idx - 1, args[idx](result));
}

function compose() {
  var args = arguments;
  return function(result) {
    result = composeAux(args, args.length - 1, result);
    return result;
  };
}
