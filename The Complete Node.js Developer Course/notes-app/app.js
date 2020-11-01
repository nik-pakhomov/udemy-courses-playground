const chalk = require("chalk").default;
const getNotes = require("./notes");

const msg = getNotes();
console.log(msg);

console.log(chalk.bold.inverse.blue("Error!"));
