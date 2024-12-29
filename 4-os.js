const os = require('os');

//info about the user
const user = os.userInfo();
console.log(user);

//method for returning the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}

console.log(currentOs);