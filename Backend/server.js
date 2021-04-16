const express = require("express");
const productRoutes = require("./src/routes/productRoutes");

const app = express();

app.use("/", productRoutes);

app.listen(4000);
