const express = require("express");
const cors = require("cors");
const authRoutes = require("./src/routes/auth/authRoutes");
const blogRoutes = require("./src/routes/blog/blogRoutes");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/v1/auth", authRoutes);
app.use("/v1/blog", blogRoutes);

app.listen(4000, () =>
    console.log("Server is up and listening at port 4000...")
);
