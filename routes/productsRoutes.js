import express from "express";
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updatedProduct } from "../controllers/productController.js";


const router = express.Router()

router.post("/", createProduct);
router.put("/:id", updatedProduct);
router.delete("/:id", deleteProduct);
router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);

export default router;