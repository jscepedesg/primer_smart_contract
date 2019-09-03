const path = require('path');
const fs = require('fs');
const solc = require('solc');
const chalk = require('chalk');
const contractpath = path.resolve(__dirname, "../contracts","UsersContract.sol");
const source = fs.readFileSync(contractpath, 'utf8');

const { interface, bytecode } = solc.compile(source, 1).contracts[':UsersContract'];

/*console.log(chalk.green(bytecode));
console.log(chalk.cyan(interface));*/

module.exports = solc.compile(source,1).contracts[':UsersContract'];
