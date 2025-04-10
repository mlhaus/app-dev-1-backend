// Application dependencies
const express = require('express');
require('dotenv').config();
const dbConnect = require('./config/db.js');
dbConnect();

// Application setup
const app = express();
const port = process.env.PORT || 5000;

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route definition
app.use(express.static('public')); // This will display /public/index.html when the server loads
app.get("/", (request, response) => {
    response.send("Welcome to Marc's API!");
});

const todosRouter = require("./routes/todos");
app.use("/api/todos", todosRouter);

const postsRouter = require("./routes/posts");
app.use("/api/posts", postsRouter);

app.get("/test-err", (req, res) => {
    throw new Error("The sky is falling!");
})
app.use("*", fileNotFound);
app.use(errorHandler);
// Route handlers
function fileNotFound (req, res) {
    res.status(404).send("Not Found");
}
function errorHandler (err, req, res) {
    res.status(500).send("I'm sorry, something happened");
}

// App listener
app.listen(port, () => console.log(`Server started on port ${port}`));