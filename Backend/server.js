const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./src/routes/auth/authRoutes");
const blogRoutes = require("./src/routes/blog/blogRoutes");
const { port } = require("./port");
const db = require("./db");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/v1/auth", authRoutes);
app.use("/v1/blog", blogRoutes);

app.use((error, req, res, next) => {
    const code = error.code || 500;
    const message = error.message;
    const data = error.data;

    res.status(code).json({
        message,
        data,
    });
});

db.mongoDB();

app.listen(port, () => console.log(`Server is LISTENING at port ${port}...`));
