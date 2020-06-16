// var fs = require("fs");

// fs.writeFileSync("note.txt", "I love travelling and");
// fs.appendFileSync("note.txt", " learning core javascript at lakehub");
var validator = require("validator");
var chalk = require("chalk");
var yargs = require("yargs");

var getNotes = require("./notes");
const { demandOption } = require("yargs");

var info = getNotes();
// console.log(info)
// console.log(chalk.blue('Hello world!'));
// console.log(validator.isEmail("jotienoochieng@gmail.com"));

// //argument vector
// console.log(process.argv);
// var command = process.argv[2];
// if (command === "add") {
//     console.log('adding a note');
// } else if (command === "remove") {
//     console.log("removing notes");
// }


//create add command
yargs.command({
    command: "add",
    describe: "add new a note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
        },
    },
    handler: function() {
        console.log("adding a new note");
    }
});

//create list command
yargs.command({
    command: "list",
    describe: "list your notes",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
        },
        body: {
            describe: "note body",
            demandOption: true,
        },
    },
    handler: function(argv) {
        console.log("title: " + argv.title);
        console.log("Body: " + argv.body);
    }
});

console.log(yargs.argv);