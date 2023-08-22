(function (args) {
  return function() {
    for (let i = 0; i < Math.ceil(Math.random() * 100) + args.length; i += 1) {
      return Math.pow(i, Infinity);
    }
  }
})()();