// Greeter.js
var config = require('./config.json');
module.exports = function() {
  let greet = document.createElement('div');
  greet.textContent = config.greetText;
  let add = 15;
  console.log(add);
  const bar = 'bar,测试';
  console.log(bar)
  // greet.textContent = "Hi there and greetings!";
  return greet;
};