console.log('utils.js');

const person = {
  name: 'David',
  last_name: 'Martinez',
  age: 24
};

const add = function (a, b) {
  return a + b;
}

module.exports = {add, person};