// var fs = require("fs");

// fs.writeFileSync("note.txt", "I love travelling and");
// fs.appendFileSync("note.txt", " learning core javascript at lakehub");
var validator = require("validator");
var chalk = require("chalk");

var getNotes = require("./notes");
var info = getNotes();
console.log(info)
console.log(chalk.blue('Hello world!'));
console.log(validator.isEmail("jotienoochieng@gmail.com"));