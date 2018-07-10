function compose() {
  var args = arguments;
  return function(result) {
    for (var i = args.length - 1; i >= 0; i--) {
      result = args[i](result);
    }
    return result;
  };
}
