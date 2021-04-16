const express = require("express");
const cors = require("cors");
const productRoutes = require("./src/routes/productRoutes");

const app = express();

app.use(cors());

app.use("/v1/customer", productRoutes);

app.listen(4000);
