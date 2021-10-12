const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fastifycrud')
    .then(() => console.log("MongoDB Connected...."))
    .catch((err) => console.log(err));

// const username = "<username>";
// const password = "<dbpassword>";
// const cluster = "<cluster0>";
// const dbname = "<dbname>";

// mongoose.connect(
//     `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`);

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//     console.log("Connected successfully");
// });