let router = require("express").Router();
let ToDoList = require("./toDoList.js");
let ListItem = require("./listItem.js");

let list = new ToDoList();

// Serves GET requests
router.get("/", function(req, res) {
    let listItems = list.getAllItems();
    res.render("index", {listItems: listItems});
});

// Serves POST requests
router.post("/item", function(req, res) {
    let itemData = req.body;
    let newItem = new ListItem(itemData.name, itemData.description, itemData.date);
    list.add(newItem);
    return res.redirect("/");
});

// Serves DELETE requests
router.delete("/item", function(req, res) {
    let listItemID = req.body.itemID;
    list.remove(listItemID);
    return res.redirect("/");
});

module.exports = router;