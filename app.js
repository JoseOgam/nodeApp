// var fs = require("fs");

// fs.writeFileSync("note.txt", "I love travelling and");
// fs.appendFileSync("note.txt", " learning core javascript at lakehub");
var validator = require("validator");
var chalk = require("chalk");
var yargs = require("yargs");

var notes = require("./notes");
const { demandOption, string } = require("yargs");

var info = notes.getNotes();
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
    command: "list",
    describe: "list all your note",
    builder: {
        title: {
            describe: "list all your notes",
            demandOption: true,
        },
    },
    handler: function() {
        console.log("adding a new note");
    }
});

//create remove command
yargs.command({
    command: "remove",
    describe: "remove note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            // type: "string",
        },
    },
    handler: function(dataNote) {
        // console.log("title: " + argv.title);
        // console.log("Body: " + argv.body);
        notes.removeNotes(dataNote.title);
    }
});

//create add command
yargs.command({
    command: "add",
    describe: "add a new note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            // type: "string",
        },
        body: {
            describe: "note body",
            demandOption: true,
            type: "string",
        },
    },
    handler: function(dataNote) {
        // console.log("title: " + argv.title);
        // console.log("Body: " + argv.body);
        notes.addNote(dataNote.title, dataNote.body);
    }
});

console.log(yargs.argv);