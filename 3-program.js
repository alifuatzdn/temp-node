const amount = 12;

if (amount < 10) {
  console.log("a");
}
else {
  console.log("b");
}

console.log(`Hey it's my first node app!!`);

const names = require('./1-names');
const sayHi = require('./2-function');

sayHi(names.ali);
sayHi(names.irmak);