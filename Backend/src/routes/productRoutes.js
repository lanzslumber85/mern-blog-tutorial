const express = require("express");

const router = express.Router();
const productController = require("../controllers/productController");

router.get("/product", productController.createProduct);
router.post("/products", productController.getAllProducts);

module.exports = router;
