// const { require } = require("yargs");

var fs = require("fs");
var book = {
    title: "33 strategies of war",
    author: "Robert Greene"
}


// var bookJSON = JSON.stringify(book);
// fs.writeFileSync("data.json", bookJSON);
// console.log(bookJSON);

// var bookData = JSON.parse(bookJSON)
// console.log(bookData);

var dataJSON = fs.readFileSync("data.json");
var data = dataJSON.toString();
console.log(JSON.parse(data));