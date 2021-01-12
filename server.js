const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const router = require("./router.js");

let app = express();

app.engine("html", ejs.renderFile);
app.set("view engine", "html");

// Add body-parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json())

// Add router middleware
app.use("/", router);

// Start server; listening to port 8000
app.listen(8000, function() {
    console.log("App running at port 8000");
});