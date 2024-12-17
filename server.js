// Import
require("dotenv").config();
const express = require("express");
const path = require("path");

const serverRouter = require("./routes/serverRouter");

// Connect to Database

// Create an App
const app = express();
const port = 8080;

// Set up static folder, body parser, session, view engine
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.use("/", serverRouter);

// Run the app
app.listen(port, () => {
    console.log(`App http://localhost:${port}`)
});