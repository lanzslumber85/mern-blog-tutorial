const express = require("express");

const app = express();

app.use(() => {
    console.log("Hello server...");
    console.log("Hello again...");
});
app.listen(4000);
