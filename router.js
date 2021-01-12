let router = require("express").Router();
let ToDoList = require("./toDoList.js");
let ListItem = require("./listItem.js");

let list = new ToDoList();

// Serves GET requests
router.get("/", function(req, res) {
    let listItems = list.getAllItems();
    res.render("index.html", {listItems: listItems});
});

// Serves POST requests
router.post("/item", function(req, res) {
    console.log(req.body);
});

// Serves DELETE requests
router.delete("/item", function(req, res) {
    console.log(req.body);
});