import express from "express";
import { 
    createProduct, 
    deleteProduct,
    getAllProducts, 
    getSingleProduct, 
    updatedProduct,
    getProductCount
} from "../controllers/productController.js";

import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router()

router.post("/", verifyAdmin, createProduct);
router.put("/:id", updatedProduct);
router.delete("/:id", verifyAdmin, deleteProduct);
router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);

router.get("/search/getProductCount", getProductCount);

export default router;