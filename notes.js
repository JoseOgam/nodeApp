var fs = require("fs");
var getNotes = function() {
    return "concerts are fan";
}

var addNote = function(title, body) {
    var notes = loadNote();
    var duplicateNotes = notes.filter(function(note) {
        return note.title === title;
    });
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log("new note added")
    } else {
        console.log("note title taken");
    }
}
var removeNotes = function(title) {
    var notes = loadNote();
    var notesToKeep = notes.filter(function(note) {
        return note.title !== title;
    });
    if (notes.length > notesToKeep.length) {
        console.log("note removed");
        saveNotes(notesToKeep);
    } else {
        console.log("notes not found");
    }
}

var saveNotes = function(notes) {
    var dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}
var loadNote = function() {
    try {
        var data = fs.readFileSync("notes.json");
        var dataJSON = data.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = { getNotes, addNote, removeNotes };