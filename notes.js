var fs = require("fs");
var getNotes = function() {
    return "concerts are fan";
}

var addNote = function(title, body) {
    var notes = laodNote();
}
var saveNotes = function(notes) {
    var dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}
var laodNote = function() {
    try {
        var data = fs.readFileSync(notes.json);
        var dataJSON = data.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = getNotes;